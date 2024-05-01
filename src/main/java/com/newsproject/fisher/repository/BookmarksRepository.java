package com.newsproject.fisher.repository;

import com.newsproject.fisher.domain.Bookmarks;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Bookmarks entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BookmarksRepository extends JpaRepository<Bookmarks, Long> {
    @Query("select bookmarks from Bookmarks bookmarks where bookmarks.bookmarkedBy.login = ?#{authentication.name}")
    List<Bookmarks> findByBookmarkedByIsCurrentUser();
}
