package com.newsproject.fisher.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Likes.
 */
@Entity
@Table(name = "likes")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Likes implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "article_id")
    private Long articleId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "comment_id")
    private Long commentId;

    @Column(name = "like_count")
    private Long likeCount;

    @ManyToOne(fetch = FetchType.LAZY)
    private User likedBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "user" }, allowSetters = true)
    private Comment likedComment;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Likes id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getArticleId() {
        return this.articleId;
    }

    public Likes articleId(Long articleId) {
        this.setArticleId(articleId);
        return this;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public Long getUserId() {
        return this.userId;
    }

    public Likes userId(Long userId) {
        this.setUserId(userId);
        return this;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCommentId() {
        return this.commentId;
    }

    public Likes commentId(Long commentId) {
        this.setCommentId(commentId);
        return this;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public Long getLikeCount() {
        return this.likeCount;
    }

    public Likes likeCount(Long likeCount) {
        this.setLikeCount(likeCount);
        return this;
    }

    public void setLikeCount(Long likeCount) {
        this.likeCount = likeCount;
    }

    public User getLikedBy() {
        return this.likedBy;
    }

    public void setLikedBy(User user) {
        this.likedBy = user;
    }

    public Likes likedBy(User user) {
        this.setLikedBy(user);
        return this;
    }

    public Comment getLikedComment() {
        return this.likedComment;
    }

    public void setLikedComment(Comment comment) {
        this.likedComment = comment;
    }

    public Likes likedComment(Comment comment) {
        this.setLikedComment(comment);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Likes)) {
            return false;
        }
        return getId() != null && getId().equals(((Likes) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Likes{" +
            "id=" + getId() +
            ", articleId=" + getArticleId() +
            ", userId=" + getUserId() +
            ", commentId=" + getCommentId() +
            ", likeCount=" + getLikeCount() +
            "}";
    }
}
