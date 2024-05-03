package com.newsproject.fisher.domain;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

public class BookmarksTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Bookmarks getBookmarksSample1() {
        return new Bookmarks().id(1L).articleId(1L).userId(1L);
    }

    public static Bookmarks getBookmarksSample2() {
        return new Bookmarks().id(2L).articleId(2L).userId(2L);
    }

    public static Bookmarks getBookmarksRandomSampleGenerator() {
        return new Bookmarks().id(longCount.incrementAndGet()).articleId(longCount.incrementAndGet()).userId(longCount.incrementAndGet());
    }
}
