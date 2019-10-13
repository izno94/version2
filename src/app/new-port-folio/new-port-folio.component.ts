import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from 'src/app/service/articlesonline.service';


@Component({
  selector: 'app-new-port-folio',
  templateUrl: './new-port-folio.component.html',
  styleUrls: ['./new-port-folio.component.css']
})
export class NewPortFolioComponent implements OnInit {

  isOk = false;

  constructor(private service: ArticlesOnlineService) { }

  ngOnInit() {

  }

  onSubmitNewPortFolio($event, f) {
    $event.preventDefault();
    if (f.valid) {
      const portfolio = f.value;
      console.log(portfolio);

      this.service.create(portfolio).subscribe(
        (result) => {
          console.log(result);
          this.isOk = true;

        }
      );
    }
  }
}
