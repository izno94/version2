import { Component, OnInit } from '@angular/core';
import { UsersOnlineService } from 'src/app/service/users-online.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {

    users;


  constructor(private service: UsersOnlineService,
              private router: Router) { }

    ngOnInit() {
      this.service.getAll().subscribe(
        (resultat) => {
          console.log(resultat);
          this.users = resultat;
        }
      );
      }
      onClickDelete(gestion) {
        this.service.delete(gestion._id).subscribe(
          (resultat) => {
            console.log(resultat);
            const index = this.users.indexOf(gestion);
            this.users.splice(index, 1);
          }
        );
      }
      onClickUpdate(gestion) {
        console.log(gestion);
        this.router.navigate(['//gestion-users/update', gestion._id]);
      }
      }












