//package com.newsproject.fisher.service.mapper;
//
//import com.newsproject.fisher.domain.Article;
//import com.newsproject.fisher.domain.enumeration.Category;
//import com.newsproject.fisher.repository.ArticleRepository;
//import com.newsproject.fisher.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class ApiLoader implements ApplicationRunner {
//
//    private ArticleRepository articleRepository;
//
//    @Autowired
//    public ApiLoader(ArticleRepository articleRepository) {
//        this.articleRepository = articleRepository;
//    }
//
//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//        Article article = new Article();
//        article.setSourceName("cnn.com");
//        article.setCategory(Category.TECHNOLOGY);
//        article.setAuthor("Jeff Banks");
//        article.setTitle("How Elon Musk Went to Mars");
//        article.setShortDescription("sdjkfkdfngkjsdnfgklnsdklfnglksdg");
//        article.setUrl("cnn.com");
//        articleRepository.save(article);
//    }
//}
