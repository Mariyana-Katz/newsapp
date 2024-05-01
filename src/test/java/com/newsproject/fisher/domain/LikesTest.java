package com.newsproject.fisher.domain;

import static com.newsproject.fisher.domain.CommentTestSamples.*;
import static com.newsproject.fisher.domain.LikesTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.newsproject.fisher.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class LikesTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Likes.class);
        Likes likes1 = getLikesSample1();
        Likes likes2 = new Likes();
        assertThat(likes1).isNotEqualTo(likes2);

        likes2.setId(likes1.getId());
        assertThat(likes1).isEqualTo(likes2);

        likes2 = getLikesSample2();
        assertThat(likes1).isNotEqualTo(likes2);
    }

    @Test
    void likedCommentTest() throws Exception {
        Likes likes = getLikesRandomSampleGenerator();
        Comment commentBack = getCommentRandomSampleGenerator();

        likes.setLikedComment(commentBack);
        assertThat(likes.getLikedComment()).isEqualTo(commentBack);

        likes.likedComment(null);
        assertThat(likes.getLikedComment()).isNull();
    }
}
