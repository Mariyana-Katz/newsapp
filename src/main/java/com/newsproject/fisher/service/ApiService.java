package com.newsproject.fisher.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.newsproject.fisher.domain.Article;
import com.newsproject.fisher.repository.ArticleRepository;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiService {

    private String apiKey = "5215fce8e3f94b78bf5148ac12c3f3e1";

    private String apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

    private final RestTemplate restTemplate;

    private ArticleRepository articleRepository;

    @Autowired
    public ApiService(RestTemplate restTemplate, ArticleRepository articleRepository) {
        this.restTemplate = restTemplate;
        this.articleRepository = articleRepository;
    }

    public List<Article> getArticlesInList() {
        String url = apiURL + apiKey;

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        String responseBody = response.getBody();

        List<Article> articles = new ArrayList<>();

        try {
            ObjectMapper objectMapper = new ObjectMapper();

            Article[] articleArray = objectMapper.readValue(responseBody, Article[].class);

            for (Article article : articleArray) {
                System.out.println(article);
                articles.add(articleRepository.save(article));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return articles;
    }

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }
}
