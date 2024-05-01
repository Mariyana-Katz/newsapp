package com.newsproject.fisher.web.rest;

import static com.newsproject.fisher.domain.BookmarksAsserts.*;
import static com.newsproject.fisher.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.newsproject.fisher.IntegrationTest;
import com.newsproject.fisher.domain.Bookmarks;
import com.newsproject.fisher.repository.BookmarksRepository;
import jakarta.persistence.EntityManager;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link BookmarksResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class BookmarksResourceIT {

    private static final Long DEFAULT_ARTICLE_ID = 1L;
    private static final Long UPDATED_ARTICLE_ID = 2L;

    private static final Long DEFAULT_USER_ID = 1L;
    private static final Long UPDATED_USER_ID = 2L;

    private static final String ENTITY_API_URL = "/api/bookmarks";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private BookmarksRepository bookmarksRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restBookmarksMockMvc;

    private Bookmarks bookmarks;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Bookmarks createEntity(EntityManager em) {
        Bookmarks bookmarks = new Bookmarks().articleId(DEFAULT_ARTICLE_ID).userId(DEFAULT_USER_ID);
        return bookmarks;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Bookmarks createUpdatedEntity(EntityManager em) {
        Bookmarks bookmarks = new Bookmarks().articleId(UPDATED_ARTICLE_ID).userId(UPDATED_USER_ID);
        return bookmarks;
    }

    @BeforeEach
    public void initTest() {
        bookmarks = createEntity(em);
    }

    @Test
    @Transactional
    void createBookmarks() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Bookmarks
        var returnedBookmarks = om.readValue(
            restBookmarksMockMvc
                .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(bookmarks)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            Bookmarks.class
        );

        // Validate the Bookmarks in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertBookmarksUpdatableFieldsEquals(returnedBookmarks, getPersistedBookmarks(returnedBookmarks));
    }

    @Test
    @Transactional
    void createBookmarksWithExistingId() throws Exception {
        // Create the Bookmarks with an existing ID
        bookmarks.setId(1L);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restBookmarksMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(bookmarks)))
            .andExpect(status().isBadRequest());

        // Validate the Bookmarks in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllBookmarks() throws Exception {
        // Initialize the database
        bookmarksRepository.saveAndFlush(bookmarks);

        // Get all the bookmarksList
        restBookmarksMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(bookmarks.getId().intValue())))
            .andExpect(jsonPath("$.[*].articleId").value(hasItem(DEFAULT_ARTICLE_ID.intValue())))
            .andExpect(jsonPath("$.[*].userId").value(hasItem(DEFAULT_USER_ID.intValue())));
    }

    @Test
    @Transactional
    void getBookmarks() throws Exception {
        // Initialize the database
        bookmarksRepository.saveAndFlush(bookmarks);

        // Get the bookmarks
        restBookmarksMockMvc
            .perform(get(ENTITY_API_URL_ID, bookmarks.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(bookmarks.getId().intValue()))
            .andExpect(jsonPath("$.articleId").value(DEFAULT_ARTICLE_ID.intValue()))
            .andExpect(jsonPath("$.userId").value(DEFAULT_USER_ID.intValue()));
    }

    @Test
    @Transactional
    void getNonExistingBookmarks() throws Exception {
        // Get the bookmarks
        restBookmarksMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingBookmarks() throws Exception {
        // Initialize the database
        bookmarksRepository.saveAndFlush(bookmarks);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the bookmarks
        Bookmarks updatedBookmarks = bookmarksRepository.findById(bookmarks.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedBookmarks are not directly saved in db
        em.detach(updatedBookmarks);
        updatedBookmarks.articleId(UPDATED_ARTICLE_ID).userId(UPDATED_USER_ID);

        restBookmarksMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedBookmarks.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(updatedBookmarks))
            )
            .andExpect(status().isOk());

        // Validate the Bookmarks in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedBookmarksToMatchAllProperties(updatedBookmarks);
    }

    @Test
    @Transactional
    void putNonExistingBookmarks() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        bookmarks.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restBookmarksMockMvc
            .perform(
                put(ENTITY_API_URL_ID, bookmarks.getId()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(bookmarks))
            )
            .andExpect(status().isBadRequest());

        // Validate the Bookmarks in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchBookmarks() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        bookmarks.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restBookmarksMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(bookmarks))
            )
            .andExpect(status().isBadRequest());

        // Validate the Bookmarks in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamBookmarks() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        bookmarks.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restBookmarksMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(bookmarks)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Bookmarks in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateBookmarksWithPatch() throws Exception {
        // Initialize the database
        bookmarksRepository.saveAndFlush(bookmarks);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the bookmarks using partial update
        Bookmarks partialUpdatedBookmarks = new Bookmarks();
        partialUpdatedBookmarks.setId(bookmarks.getId());

        partialUpdatedBookmarks.userId(UPDATED_USER_ID);

        restBookmarksMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedBookmarks.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedBookmarks))
            )
            .andExpect(status().isOk());

        // Validate the Bookmarks in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertBookmarksUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedBookmarks, bookmarks),
            getPersistedBookmarks(bookmarks)
        );
    }

    @Test
    @Transactional
    void fullUpdateBookmarksWithPatch() throws Exception {
        // Initialize the database
        bookmarksRepository.saveAndFlush(bookmarks);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the bookmarks using partial update
        Bookmarks partialUpdatedBookmarks = new Bookmarks();
        partialUpdatedBookmarks.setId(bookmarks.getId());

        partialUpdatedBookmarks.articleId(UPDATED_ARTICLE_ID).userId(UPDATED_USER_ID);

        restBookmarksMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedBookmarks.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedBookmarks))
            )
            .andExpect(status().isOk());

        // Validate the Bookmarks in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertBookmarksUpdatableFieldsEquals(partialUpdatedBookmarks, getPersistedBookmarks(partialUpdatedBookmarks));
    }

    @Test
    @Transactional
    void patchNonExistingBookmarks() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        bookmarks.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restBookmarksMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, bookmarks.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(bookmarks))
            )
            .andExpect(status().isBadRequest());

        // Validate the Bookmarks in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchBookmarks() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        bookmarks.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restBookmarksMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(bookmarks))
            )
            .andExpect(status().isBadRequest());

        // Validate the Bookmarks in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamBookmarks() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        bookmarks.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restBookmarksMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(om.writeValueAsBytes(bookmarks)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Bookmarks in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteBookmarks() throws Exception {
        // Initialize the database
        bookmarksRepository.saveAndFlush(bookmarks);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the bookmarks
        restBookmarksMockMvc
            .perform(delete(ENTITY_API_URL_ID, bookmarks.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return bookmarksRepository.count();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected Bookmarks getPersistedBookmarks(Bookmarks bookmarks) {
        return bookmarksRepository.findById(bookmarks.getId()).orElseThrow();
    }

    protected void assertPersistedBookmarksToMatchAllProperties(Bookmarks expectedBookmarks) {
        assertBookmarksAllPropertiesEquals(expectedBookmarks, getPersistedBookmarks(expectedBookmarks));
    }

    protected void assertPersistedBookmarksToMatchUpdatableProperties(Bookmarks expectedBookmarks) {
        assertBookmarksAllUpdatablePropertiesEquals(expectedBookmarks, getPersistedBookmarks(expectedBookmarks));
    }
}
