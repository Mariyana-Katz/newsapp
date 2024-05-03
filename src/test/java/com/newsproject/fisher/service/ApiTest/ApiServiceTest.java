package com.newsproject.fisher.service.ApiTest;

import com.newsproject.fisher.NewsprojectApp;
import com.newsproject.fisher.domain.Article;
import com.newsproject.fisher.repository.ArticleRepository;
import com.newsproject.fisher.service.ApiService;
import com.newsproject.fisher.service.Config;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest(classes = { Config.class, NewsprojectApp.class })
public class ApiServiceTest {

    @Autowired
    private ApiService apiService;

    private ArticleRepository articleRepository;

    @Test
    public void apiPrintToConsoleTest() {
        System.out.println(apiService.getArticlesInList());
    }

    @Test
    public void testingSave() {
        apiService.testingSave();
    }
    //    @Test
    //    public void getAllArticlesTest(){
    //        apiService.saveArticlesFromJson(apiService.getArticlesInList());
    //        System.out.println(apiService.getAllArticles());
    //    }

}
