import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../service/articlesonline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-one',
  templateUrl: './portfolio-one.component.html',
  styleUrls: ['./portfolio-one.component.css']
})
export class PortfolioOneComponent implements OnInit {

  portfolio;

  constructor(private service: ArticlesOnlineService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.service.getOne(id).subscribe((resultat) => {
        this.portfolio = resultat;
        console.log(resultat);

      });
    });
    }
    onClickHome() {
      this.router.navigate(['/']);
    }
}
