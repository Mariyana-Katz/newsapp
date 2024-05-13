package com.newsproject.fisher.service;

import com.newsproject.fisher.domain.Article;
import com.newsproject.fisher.repository.ArticleRepository;

public class ArticleService {

    private ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public ArticleService() {}

    public Iterable<Article> index() {
        return articleRepository.findAll();
    }

    public Article create(Article article) {
        return articleRepository.save(article);
    }

    //    public Article show(Long id) {
    //
    //        return articleRepository.findById(id).get();
    //    }

    public boolean delete(Long id) {
        articleRepository.deleteById(id);
        return true;
    }
}
