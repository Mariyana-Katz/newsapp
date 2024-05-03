package com.newsproject.fisher.web.rest;

import com.newsproject.fisher.domain.Article;
import com.newsproject.fisher.service.ApiService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @Autowired
    private ApiService apiService;

    @GetMapping("/testing")
    public List<Article> mainPage() {
        apiService.testingSave();

        return apiService.getAllArticles();
    }
}
