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
    //makes http req and handles responses

    private ObjectMapper objectMapper;

    //part of Jackson library, parsing json data to java obj, vice versa

    @Autowired
    public ApiService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    //constructor injection bc of early failure detection, fail at startup, not runtime

    public List<Article> fetchDataFromExternalApi() {
        String resourceUrl = apiURL + apiKey;
        try {
            ResponseEntity<String> response = restTemplate.getForEntity(resourceUrl, String.class);
            //gets http response body, expect it to be a string
            JsonNode root = objectMapper.readTree(response.getBody());
            //get the entire json, including what is not need in fron of []
            JsonNode articlesNode = root.path("articles");
            //only get the data that is in articles:[]
            if (!articlesNode.isMissingNode()) {
                //if articles exists
                return objectMapper.convertValue(articlesNode, new TypeReference<List<Article>>() {});
                //converts json array to list of article objects
            }
            return List.of();
            //return an empty list if "articles" is missing
        } catch (Exception e) {
            // Log the exception and handle it as needed
            System.err.println("Failed to fetch data from newsAPI: " + e.getMessage());
            return List.of();
            //return an empty list in case of an exception
        }
    }

    public List<Article> filteringArticles(List<Article> articles) {
        List<Article> newFiteredArticles = new ArrayList<>();

        for (Article article : articles) {
            if (article.getUrl() != null && !article.getUrl().equals("https://removed.com")) {
                //if the url is not null or is not https://removed.com
                //maybe also article.getContent != null as well
                newFiteredArticles.add(article);
            }
        }
        return newFiteredArticles;
    }
    //    public String fetchDataFromExternalApi() {
    //        RestTemplate restTemplate = new RestTemplate();
    //        String resourceUrl = apiURL + apiKey; // Replace with your API URL
    //        ResponseEntity<String> response = restTemplate.getForEntity(resourceUrl, String.class);
    //        return response.getBody();
    //    }

    //    public List<Article> getArticlesInList() {
    //        String url = apiURL + apiKey;
    //
    //        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
    //        if (responseEntity.getStatusCode().is2xxSuccessful()) {
    //            return responseEntity.getBody();
    //        } else {
    //            // Request to News API failed
    //            System.err.println("Failed to fetch articles from the News API. Status code: " + responseEntity.getStatusCodeValue());
    //            return null;
    //        }
    //
    //    }

}
