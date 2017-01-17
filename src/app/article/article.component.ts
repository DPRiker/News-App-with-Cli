import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';
import { HttpService } from './http.service';



@Component({
	selector: 'app-article',
	inputs: ['article'],
	host: {
		class: 'row'
	},
	templateUrl: 'article.component.html',
	providers: [HttpService]
})

export class ArticleComponent {
	article: Article;
	receivedArticle: Article[];
	done: boolean = false;
	constructor(private httpService: HttpService) {

	}

	submit(article) {
		this.httpService.getArticles().then(this.receivedArticle = article),
			this.done = true;

	}

	voteUp(): boolean {
		this.article.votes += 1;
		return false
	}

	voteDown(): boolean {
		this.article.votes -= 1;
		return false
	}
}

