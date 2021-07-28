import { Component, OnInit } from '@angular/core';
import { hackerNew } from 'src/app/models/hackerNew';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  public hackerNew!: hackerNew;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews('angular', '0').subscribe(hackerNew => {
      this.hackerNew = hackerNew;
      console.log( this.hackerNew);
    },
      error => {
        console.log(<any>error);
      });
  }

}
