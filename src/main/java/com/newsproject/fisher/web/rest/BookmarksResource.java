package com.newsproject.fisher.web.rest;

import com.newsproject.fisher.domain.Bookmarks;
import com.newsproject.fisher.repository.BookmarksRepository;
import com.newsproject.fisher.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.newsproject.fisher.domain.Bookmarks}.
 */
@RestController
@RequestMapping("/api/bookmarks")
@Transactional
public class BookmarksResource {

    private final Logger log = LoggerFactory.getLogger(BookmarksResource.class);

    private static final String ENTITY_NAME = "bookmarks";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final BookmarksRepository bookmarksRepository;

    public BookmarksResource(BookmarksRepository bookmarksRepository) {
        this.bookmarksRepository = bookmarksRepository;
    }

    /**
     * {@code POST  /bookmarks} : Create a new bookmarks.
     *
     * @param bookmarks the bookmarks to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new bookmarks, or with status {@code 400 (Bad Request)} if the bookmarks has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Bookmarks> createBookmarks(@RequestBody Bookmarks bookmarks) throws URISyntaxException {
        log.debug("REST request to save Bookmarks : {}", bookmarks);
        if (bookmarks.getId() != null) {
            throw new BadRequestAlertException("A new bookmarks cannot already have an ID", ENTITY_NAME, "idexists");
        }
        bookmarks = bookmarksRepository.save(bookmarks);
        return ResponseEntity.created(new URI("/api/bookmarks/" + bookmarks.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, bookmarks.getId().toString()))
            .body(bookmarks);
    }

    /**
     * {@code PUT  /bookmarks/:id} : Updates an existing bookmarks.
     *
     * @param id the id of the bookmarks to save.
     * @param bookmarks the bookmarks to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated bookmarks,
     * or with status {@code 400 (Bad Request)} if the bookmarks is not valid,
     * or with status {@code 500 (Internal Server Error)} if the bookmarks couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Bookmarks> updateBookmarks(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Bookmarks bookmarks
    ) throws URISyntaxException {
        log.debug("REST request to update Bookmarks : {}, {}", id, bookmarks);
        if (bookmarks.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, bookmarks.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!bookmarksRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        bookmarks = bookmarksRepository.save(bookmarks);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, bookmarks.getId().toString()))
            .body(bookmarks);
    }

    /**
     * {@code PATCH  /bookmarks/:id} : Partial updates given fields of an existing bookmarks, field will ignore if it is null
     *
     * @param id the id of the bookmarks to save.
     * @param bookmarks the bookmarks to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated bookmarks,
     * or with status {@code 400 (Bad Request)} if the bookmarks is not valid,
     * or with status {@code 404 (Not Found)} if the bookmarks is not found,
     * or with status {@code 500 (Internal Server Error)} if the bookmarks couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Bookmarks> partialUpdateBookmarks(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Bookmarks bookmarks
    ) throws URISyntaxException {
        log.debug("REST request to partial update Bookmarks partially : {}, {}", id, bookmarks);
        if (bookmarks.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, bookmarks.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!bookmarksRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Bookmarks> result = bookmarksRepository
            .findById(bookmarks.getId())
            .map(existingBookmarks -> {
                if (bookmarks.getArticleId() != null) {
                    existingBookmarks.setArticleId(bookmarks.getArticleId());
                }
                if (bookmarks.getUserId() != null) {
                    existingBookmarks.setUserId(bookmarks.getUserId());
                }

                return existingBookmarks;
            })
            .map(bookmarksRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, bookmarks.getId().toString())
        );
    }

    /**
     * {@code GET  /bookmarks} : get all the bookmarks.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of bookmarks in body.
     */
    @GetMapping("")
    public List<Bookmarks> getAllBookmarks() {
        log.debug("REST request to get all Bookmarks");
        return bookmarksRepository.findAll();
    }

    /**
     * {@code GET  /bookmarks/:id} : get the "id" bookmarks.
     *
     * @param id the id of the bookmarks to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the bookmarks, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Bookmarks> getBookmarks(@PathVariable("id") Long id) {
        log.debug("REST request to get Bookmarks : {}", id);
        Optional<Bookmarks> bookmarks = bookmarksRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(bookmarks);
    }

    /**
     * {@code DELETE  /bookmarks/:id} : delete the "id" bookmarks.
     *
     * @param id the id of the bookmarks to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBookmarks(@PathVariable("id") Long id) {
        log.debug("REST request to delete Bookmarks : {}", id);
        bookmarksRepository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
