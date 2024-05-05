package com.newsproject.fisher.service.ApiTest;

import com.newsproject.fisher.NewsprojectApp;
import com.newsproject.fisher.service.ApiService;
import com.newsproject.fisher.service.RestTempleConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = { RestTempleConfig.class, NewsprojectApp.class })
public class ApiServiceTest {

    @Autowired
    private ApiService apiService;

    @Test
    public void apiPrintToConsoleTest() {
        System.out.println(apiService.fetchDataFromExternalApi());
    }
}
