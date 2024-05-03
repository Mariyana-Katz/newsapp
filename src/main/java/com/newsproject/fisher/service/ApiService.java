package com.newsproject.fisher.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.newsproject.fisher.domain.Article;
import com.newsproject.fisher.repository.ArticleRepository;
import com.newsproject.fisher.web.rest.ArticleResource;
import java.io.IOException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiService {

    private String apiKey = "5215fce8e3f94b78bf5148ac12c3f3e1";

    private String apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

    private RestTemplate restTemplate;

    private ArticleRepository articleRepository;

    @Autowired
    public ApiService(RestTemplate restTemplate, ArticleRepository articleRepository) {
        this.restTemplate = restTemplate;
        this.articleRepository = articleRepository;
    }

    public String getArticlesInList() {
        String url = apiURL + apiKey;

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        return response.getBody();
    }

    public Article testingSave() {
        ArticleResource testing = new ArticleResource(this.articleRepository);
        Article article = new Article();

        try {
            article.setSourceName("Testing");
            article.setAuthor("ME");
            article.setTitle("Is this working Book Title");
            article.setShortDescription("pls work i beg");
            article.setUrl("https://www.youtube.com/");
            article.setContent("Asan was here, akdfskjadslkfhlkvhk kjshkjhghfkhkaj");
            article.setLikes(7L);

            testing.createArticle(article);
            System.out.println("Successful");
        } catch (Exception e) {
            System.err.println("no");
        }
        return article;
    }

    //    public void saveArticlesFromJson(String jsonInput) {
    //        ObjectMapper mapper = new ObjectMapper();
    //        try {
    //            JsonNode root = mapper.readTree(jsonInput);
    //            JsonNode articlesNode = root.path("articles");
    //
    //            for (JsonNode node : articlesNode) {
    //                Article article = new Article();
    //                article.setSourceName(node.path("source").path("name").asText(null));
    //                article.setAuthor(node.path("author").asText(null));
    //                article.setTitle(node.path("title").asText(null));
    //                article.setShortDescription(node.path("description").asText(null));
    //                article.setUrl(node.path("url").asText(null));
    //                article.setUrlToImage(node.path("urlToImage").asText(null));
    //                String publishedAt = node.path("publishedAt").asText(null);
    //                article.setPublished(Instant.parse(publishedAt));
    //                article.setContent(node.path("content").asText(null));
    //
    //                articleRepository.save(article);
    //            }
    //        } catch (Exception e) {
    //            e.printStackTrace();
    //        }
    //    }

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }
}
