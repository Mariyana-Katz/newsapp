package com.newsproject.fisher.web.rest;

import com.newsproject.fisher.domain.Article;
import com.newsproject.fisher.repository.ArticleRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @Autowired
    private ArticleRepository articleRepository;

    //takes in multiple articles
    @PostMapping("/api/posting/multiple")
    public ResponseEntity<List<Article>> savingDataFromApi(@RequestBody List<Article> articles) {
        //@Requestbody uses Jackson library to deserialize the incoming JSON data into a list of Java Article objects.
        List<Article> testArt = articleRepository.saveAll(articles);
        return ResponseEntity.ok(testArt);
    }

    //takes in a single article
    @PostMapping("/api/posting")
    public ResponseEntity<Article> savingDataFromApi(@RequestBody Article article) {
        Article testArt = articleRepository.save(article);
        return ResponseEntity.ok(testArt);
    }
}
