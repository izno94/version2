import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../service/articlesonline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios;

  constructor(private service: ArticlesOnlineService,
              private router: Router) { }

  ngOnInit() {
  this.service.getAll().subscribe(
    (resultat) => {
      console.log(resultat);
      this.portfolios = resultat;
    }
  );
  }
onClickDelete(portfolio) {
  this.service.delete(portfolio._id).subscribe(
    (resultat) => {
      console.log(resultat);
      const index = this.portfolios.indexOf(portfolio);
      this.portfolios.splice(index, 1);
    }
  );
}
onClickUpdate(portfolio) {
  console.log(portfolio);
  this.router.navigate(['/portfolio/update', portfolio._id]);
}
}
