//package com.newsproject.fisher.service;
//
//import com.fasterxml.jackson.core.type.TypeReference;
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.newsproject.fisher.domain.Article;
//import com.newsproject.fisher.repository.ArticleRepository;
//import com.newsproject.fisher.web.rest.ArticleResource;
//import java.io.IOException;
//import java.time.Instant;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;
//
//@Service
//public class ApiService {
//
//    private String apiKey = "5215fce8e3f94b78bf5148ac12c3f3e1";
//
//    private String apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
//
//    @Autowired
//    private RestTemplate restTemplate;
//
//    @Autowired
//    private ObjectMapper objectMapper;
//
//    @Autowired
//    private ArticleRepository articleRepository;
//
//
//
//    public List<Article> getArticlesInList() {
//        String url = apiURL + apiKey;
//
//        String data = restTemplate.getForObject(url, String.class);
//        try {
//            return objectMapper.readValue(data, new TypeReference<List<Article>>() {});
//        } catch (Exception e) {
//
//            return Collections.emptyList();
//        }
//    }
//
//    public List<Article> saveArticles(String apiUrl) {
//        List<Article> articles = getArticlesInList();
//        return articleRepository.saveAll(articles);
//    }
//}
