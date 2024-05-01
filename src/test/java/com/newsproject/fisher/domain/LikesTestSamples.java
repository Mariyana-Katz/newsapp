package com.newsproject.fisher.domain;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

public class LikesTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Likes getLikesSample1() {
        return new Likes().id(1L).articleId(1L).userId(1L).commentId(1L).likeCount(1L);
    }

    public static Likes getLikesSample2() {
        return new Likes().id(2L).articleId(2L).userId(2L).commentId(2L).likeCount(2L);
    }

    public static Likes getLikesRandomSampleGenerator() {
        return new Likes()
            .id(longCount.incrementAndGet())
            .articleId(longCount.incrementAndGet())
            .userId(longCount.incrementAndGet())
            .commentId(longCount.incrementAndGet())
            .likeCount(longCount.incrementAndGet());
    }
}
