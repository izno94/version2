import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../service/local.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
article;
  constructor(private route: ActivatedRoute,
              private service: LocalService,
              private router: Router ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( ( params ) => {
      const id = params.get('id');
      this.article = this.service.get(id);


      if ( Object.keys( this.service.get(id)).length !== 0 ) {
       this.article = this.service.get(id) ;
    } else {
       this.router.navigate(['/notfound']);
    }
    });



  }
onClickHome() {
    this.router.navigate(['/']);
  }
}
