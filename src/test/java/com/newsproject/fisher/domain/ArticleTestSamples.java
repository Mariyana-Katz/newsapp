package com.newsproject.fisher.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class ArticleTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Article getArticleSample1() {
        return new Article()
            .id(1L)
            .sourceName("sourceName1")
            .author("author1")
            .title("title1")
            .shortDescription("shortDescription1")
            .url("url1")
            .urlToImage("urlToImage1")
            .content("content1")
            .likes(1L);
    }

    public static Article getArticleSample2() {
        return new Article()
            .id(2L)
            .sourceName("sourceName2")
            .author("author2")
            .title("title2")
            .shortDescription("shortDescription2")
            .url("url2")
            .urlToImage("urlToImage2")
            .content("content2")
            .likes(2L);
    }

    public static Article getArticleRandomSampleGenerator() {
        return new Article()
            .id(longCount.incrementAndGet())
            .sourceName(UUID.randomUUID().toString())
            .author(UUID.randomUUID().toString())
            .title(UUID.randomUUID().toString())
            .shortDescription(UUID.randomUUID().toString())
            .url(UUID.randomUUID().toString())
            .urlToImage(UUID.randomUUID().toString())
            .content(UUID.randomUUID().toString())
            .likes(longCount.incrementAndGet());
    }
}
