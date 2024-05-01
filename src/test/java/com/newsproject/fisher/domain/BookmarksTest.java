package com.newsproject.fisher.domain;

import static com.newsproject.fisher.domain.BookmarksTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.newsproject.fisher.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class BookmarksTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Bookmarks.class);
        Bookmarks bookmarks1 = getBookmarksSample1();
        Bookmarks bookmarks2 = new Bookmarks();
        assertThat(bookmarks1).isNotEqualTo(bookmarks2);

        bookmarks2.setId(bookmarks1.getId());
        assertThat(bookmarks1).isEqualTo(bookmarks2);

        bookmarks2 = getBookmarksSample2();
        assertThat(bookmarks1).isNotEqualTo(bookmarks2);
    }
}
