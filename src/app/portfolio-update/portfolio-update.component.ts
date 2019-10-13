import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../service/articlesonline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-update',
  templateUrl: './portfolio-update.component.html',
  styleUrls: ['./portfolio-update.component.css']
})
export class PortfolioUpdateComponent implements OnInit {

portfolio;
isOk = false;

  constructor(private service: ArticlesOnlineService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.service.getOne(id).subscribe((result) => {


        this.portfolio = result;
      }, (error) => {
        this.router.navigate(['/not-found']);

      });


    });
  }
    onSubmitPortFolioUpDate($event, f) {
    $event.preventDefault();
    if (f.valid) {
      const portfolio = f.value;

      console.log('ressource => ', portfolio);
      this.service.update(portfolio).subscribe((result) => {
        console.log(result);
        this.isOk = true ;
      });
    }
  }
}
