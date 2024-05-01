package com.newsproject.fisher.domain;

import com.newsproject.fisher.domain.enumeration.Category;
import jakarta.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Article.
 */
@Entity
@Table(name = "article")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Article implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "source_name")
    private String sourceName;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private Category category;

    @Column(name = "author")
    private String author;

    @Column(name = "title")
    private String title;

    @Column(name = "short_description")
    private String shortDescription;

    @Column(name = "url")
    private String url;

    @Column(name = "url_to_image")
    private String urlToImage;

    @Column(name = "published")
    private Instant published;

    @Column(name = "content")
    private String content;

    @Column(name = "likes")
    private Long likes;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_article__liked_by",
        joinColumns = @JoinColumn(name = "article_id"),
        inverseJoinColumns = @JoinColumn(name = "liked_by_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<User> likedBies = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_article__book_marked_by",
        joinColumns = @JoinColumn(name = "article_id"),
        inverseJoinColumns = @JoinColumn(name = "book_marked_by_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<User> bookMarkedBies = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_article__user",
        joinColumns = @JoinColumn(name = "article_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<User> users = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Article id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSourceName() {
        return this.sourceName;
    }

    public Article sourceName(String sourceName) {
        this.setSourceName(sourceName);
        return this;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }

    public Category getCategory() {
        return this.category;
    }

    public Article category(Category category) {
        this.setCategory(category);
        return this;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getAuthor() {
        return this.author;
    }

    public Article author(String author) {
        this.setAuthor(author);
        return this;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return this.title;
    }

    public Article title(String title) {
        this.setTitle(title);
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getShortDescription() {
        return this.shortDescription;
    }

    public Article shortDescription(String shortDescription) {
        this.setShortDescription(shortDescription);
        return this;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getUrl() {
        return this.url;
    }

    public Article url(String url) {
        this.setUrl(url);
        return this;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrlToImage() {
        return this.urlToImage;
    }

    public Article urlToImage(String urlToImage) {
        this.setUrlToImage(urlToImage);
        return this;
    }

    public void setUrlToImage(String urlToImage) {
        this.urlToImage = urlToImage;
    }

    public Instant getPublished() {
        return this.published;
    }

    public Article published(Instant published) {
        this.setPublished(published);
        return this;
    }

    public void setPublished(Instant published) {
        this.published = published;
    }

    public String getContent() {
        return this.content;
    }

    public Article content(String content) {
        this.setContent(content);
        return this;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getLikes() {
        return this.likes;
    }

    public Article likes(Long likes) {
        this.setLikes(likes);
        return this;
    }

    public void setLikes(Long likes) {
        this.likes = likes;
    }

    public Set<User> getLikedBies() {
        return this.likedBies;
    }

    public void setLikedBies(Set<User> users) {
        this.likedBies = users;
    }

    public Article likedBies(Set<User> users) {
        this.setLikedBies(users);
        return this;
    }

    public Article addLikedBy(User user) {
        this.likedBies.add(user);
        return this;
    }

    public Article removeLikedBy(User user) {
        this.likedBies.remove(user);
        return this;
    }

    public Set<User> getBookMarkedBies() {
        return this.bookMarkedBies;
    }

    public void setBookMarkedBies(Set<User> users) {
        this.bookMarkedBies = users;
    }

    public Article bookMarkedBies(Set<User> users) {
        this.setBookMarkedBies(users);
        return this;
    }

    public Article addBookMarkedBy(User user) {
        this.bookMarkedBies.add(user);
        return this;
    }

    public Article removeBookMarkedBy(User user) {
        this.bookMarkedBies.remove(user);
        return this;
    }

    public Set<User> getUsers() {
        return this.users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public Article users(Set<User> users) {
        this.setUsers(users);
        return this;
    }

    public Article addUser(User user) {
        this.users.add(user);
        return this;
    }

    public Article removeUser(User user) {
        this.users.remove(user);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Article)) {
            return false;
        }
        return getId() != null && getId().equals(((Article) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Article{" +
            "id=" + getId() +
            ", sourceName='" + getSourceName() + "'" +
            ", category='" + getCategory() + "'" +
            ", author='" + getAuthor() + "'" +
            ", title='" + getTitle() + "'" +
            ", shortDescription='" + getShortDescription() + "'" +
            ", url='" + getUrl() + "'" +
            ", urlToImage='" + getUrlToImage() + "'" +
            ", published='" + getPublished() + "'" +
            ", content='" + getContent() + "'" +
            ", likes=" + getLikes() +
            "}";
    }
}
