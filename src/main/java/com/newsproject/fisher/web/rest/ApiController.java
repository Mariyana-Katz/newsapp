package com.newsproject.fisher.web.rest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.newsproject.fisher.domain.Article;
import com.newsproject.fisher.repository.ArticleRepository;
import com.newsproject.fisher.service.ApiService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {

    private ApiService apiService;

    private ArticleRepository articleRepository;

    @Autowired
    public ApiController(ApiService apiService, ArticleRepository articleRepository) {
        this.apiService = apiService;
        this.articleRepository = articleRepository;
    }

    //constructor injection bc of early failure detection, fail at startup, not runtime

    @PostMapping("/api/posting/multiple")
    public ResponseEntity<List<Article>> fetchAndSaveArticles() {
        List<Article> articles = apiService.fetchDataFromExternalApi();
        List<Article> savedArticles = articleRepository.saveAll(articles);
        return ResponseEntity.ok(savedArticles);
    }
    //    //takes in multiple articles
    //    @PostMapping("/api/posting/multiple")
    //    public ResponseEntity<List<Article>> savingDataFromApi(@RequestBody List<Article> articles) {
    //        //@Requestbody uses Jackson library to deserialize the incoming JSON data into a list of Java Article objects.
    //        List<Article> testArt = articleRepository.saveAll(articles);
    //        return ResponseEntity.ok(testArt);
    //    }

    //takes in a single article
    //    @PostMapping("/api/posting")
    //    public ResponseEntity<Article> savingDataFromApi(@RequestBody Article article) {
    //        Article testArt = articleRepository.save(article);
    //        return ResponseEntity.ok(testArt);
    //    }
}
