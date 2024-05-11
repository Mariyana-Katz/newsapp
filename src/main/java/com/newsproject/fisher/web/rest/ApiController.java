package com.newsproject.fisher.web.rest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.newsproject.fisher.domain.Article;
import com.newsproject.fisher.domain.enumeration.Category;
import com.newsproject.fisher.repository.ArticleRepository;
import com.newsproject.fisher.service.ApiService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
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

    //    @Scheduled(initialDelay = 30000, fixedRate = Long.MAX_VALUE)
    public void deleteAllArticles() {
        articleRepository.deleteAll();
    }

    //    @Scheduled(initialDelay = 60000, fixedRate = Long.MAX_VALUE)
    //@Scheduled(cron = "0 0 6 * * *", zone = "America/New_York")
    public void headlineArticles() {
        List<Article> articles = apiService.fetchingCategoryData("headlines");
        //assign articles List to list of java objects from api
        List<Article> filteredArticles = apiService.filteringArticles(articles);
        //save filtered articles after filtering them
        for (Article article : filteredArticles) {
            article.setCategory(Category.HEADLINES);
        }
        //
        List<Article> savedArticles = articleRepository.saveAll(filteredArticles);
        //saving it, but saving it to savedArticles
    }

    //    @Scheduled(initialDelay = 60000, fixedRate = Long.MAX_VALUE)
    //@Scheduled(cron = "0 0 6 * * *", zone = "America/New_York")
    public void worldArticles() {
        List<Article> articles = apiService.fetchingCategoryData("world");
        List<Article> filteredArticles = apiService.filteringArticles(articles);
        for (Article article : filteredArticles) {
            article.setCategory(Category.WORLD);
        }
        List<Article> savedArticles = articleRepository.saveAll(filteredArticles);
    }

    //    @Scheduled(initialDelay = 60000, fixedRate = Long.MAX_VALUE)
    //@Scheduled(cron = "0 0 6 * * *", zone = "America/New_York")
    public void nationalArticles() {
        List<Article> articles = apiService.fetchingCategoryData("national");
        List<Article> filteredArticles = apiService.filteringArticles(articles);
        for (Article article : filteredArticles) {
            article.setCategory(Category.NATIONAL);
        }
        List<Article> savedArticles = articleRepository.saveAll(filteredArticles);
    }

    //    @Scheduled(initialDelay = 60000, fixedRate = Long.MAX_VALUE)
    //@Scheduled(cron = "0 0 6 * * *", zone = "America/New_York")
    public void businessArticles() {
        List<Article> articles = apiService.fetchingCategoryData("business");
        List<Article> filteredArticles = apiService.filteringArticles(articles);
        for (Article article : filteredArticles) {
            article.setCategory(Category.BUSINESS);
        }
        List<Article> savedArticles = articleRepository.saveAll(filteredArticles);
    }

    //    @Scheduled(initialDelay = 60000, fixedRate = Long.MAX_VALUE)
    //@Scheduled(cron = "0 0 6 * * *", zone = "America/New_York")
    public void technologyArticles() {
        List<Article> articles = apiService.fetchingCategoryData("technology");
        List<Article> filteredArticles = apiService.filteringArticles(articles);
        for (Article article : filteredArticles) {
            article.setCategory(Category.TECHNOLOGY);
        }
        List<Article> savedArticles = articleRepository.saveAll(filteredArticles);
    }

    //    @Scheduled(initialDelay = 60000, fixedRate = Long.MAX_VALUE)
    //@Scheduled(cron = "0 0 6 * * *", zone = "America/New_York")
    public void scienceArticles() {
        List<Article> articles = apiService.fetchingCategoryData("science");
        List<Article> filteredArticles = apiService.filteringArticles(articles);
        for (Article article : filteredArticles) {
            article.setCategory(Category.SCIENCE);
        }
        List<Article> savedArticles = articleRepository.saveAll(filteredArticles);
    }

    //    @Scheduled(initialDelay = 60000, fixedRate = Long.MAX_VALUE)
    //@Scheduled(cron = "0 0 6 * * *", zone = "America/New_York")
    public void cultureArticles() {
        List<Article> articles = apiService.fetchingCategoryData("culture");
        List<Article> filteredArticles = apiService.filteringArticles(articles);
        for (Article article : filteredArticles) {
            article.setCategory(Category.ARTSANDCULTURE);
        }
        List<Article> savedArticles = articleRepository.saveAll(filteredArticles);
    }

    //    @Scheduled(initialDelay = 60000, fixedRate = Long.MAX_VALUE)
    //@Scheduled(cron = "0 0 6 * * *", zone = "America/New_York")
    public void politicsArticles() {
        List<Article> articles = apiService.fetchingCategoryData("politics");
        List<Article> filteredArticles = apiService.filteringArticles(articles);
        for (Article article : filteredArticles) {
            article.setCategory(Category.POLITICS);
        }
        List<Article> savedArticles = articleRepository.saveAll(filteredArticles);
    }

    //    @Scheduled(initialDelay = 60000, fixedRate = Long.MAX_VALUE)
    //@Scheduled(cron = "0 0 6 * * *", zone = "America/New_York")
    public void climateArticles() {
        List<Article> articles = apiService.fetchingCategoryData("climate");
        List<Article> filteredArticles = apiService.filteringArticles(articles);
        for (Article article : filteredArticles) {
            article.setCategory(Category.CLIMATE);
        }
        List<Article> savedArticles = articleRepository.saveAll(filteredArticles);
    }

    @PostMapping("/api/posting/multiple")
    public ResponseEntity<List<Article>> fetchAndSaveArticles() {
        List<Article> articles = apiService.fetchDataFromExternalApi();
        //assign articles List to list of java objects from api
        List<Article> savedArticles = articleRepository.saveAll(articles);
        //saving it, but saving it to savedArticles
        return ResponseEntity.ok(savedArticles);
        //return 200 status ok if articles are saved successfully
    }
}
