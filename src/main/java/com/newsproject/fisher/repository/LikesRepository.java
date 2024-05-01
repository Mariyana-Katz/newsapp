package com.newsproject.fisher.repository;

import com.newsproject.fisher.domain.Likes;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Likes entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LikesRepository extends JpaRepository<Likes, Long> {
    @Query("select likes from Likes likes where likes.likedBy.login = ?#{authentication.name}")
    List<Likes> findByLikedByIsCurrentUser();
}
