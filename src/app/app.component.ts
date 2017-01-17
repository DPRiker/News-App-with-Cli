import { ArticleComponent } from './article/article.component'
import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { CategoryListComponent } from './article/category-list.component'

@Component({
    selector: 'news-app',
    entryComponents: [ArticleComponent],
    templateUrl: 'app.component.html'
})

export class AppComponent {
    articles: Article[];

    constructor() {
        this.articles = [
            new Article('News in Africa', 'http://africa.io', 'news', 3),
            new Article('Storm in ocean', 'http://ocean.io', 'news', 2),
            new Article('Angular Homepage', 'http://angular.io', 'news', 1),
        ];
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement, category: HTMLInputElement): void {
        if (title.value == "" && link.value == "") {
            alert("Please add article title and link")
        } else {
            this.articles.push(new Article(title.value, link.value, category.value, 0));
            title.value = '';
            link.value = '';
            category.value = '';

        }
    }
    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes + a.votes);
    }
}

