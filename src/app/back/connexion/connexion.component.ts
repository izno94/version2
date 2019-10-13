import { Component, OnInit } from '@angular/core';
import { UsersOnlineService } from 'src/app/service/users-online.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  isOk = false;

  constructor(private service: UsersOnlineService ) { }

  ngOnInit() {

  }

  onSubmitConnexion($event, f) {
    $event.preventDefault();
    if (f.valid) {
      const gestion = f.value;
      console.log(gestion);

      this.service.create(gestion).subscribe(
        (result) => {
          console.log(result);
          this.isOk = true;

        }
      );
    }
  }
}

