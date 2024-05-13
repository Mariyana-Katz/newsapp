package com.newsproject.fisher.repository;

import com.newsproject.fisher.domain.Comment;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Comment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    @Query("select comment from Comment comment where comment.user.login = ?#{authentication.name}")
    List<Comment> findByUserIsCurrentUser();

    @Query("select comment from Comment comment where comment.likes = :articleId order by comment.id desc")
    List<Comment> findByArticleId(@Param("articleId") Integer articleId);
    //@Query annotation allows to write custom queries using JPQL (java persistence query language)
    //@Param annotation binds the method para to :articleId in query
}
