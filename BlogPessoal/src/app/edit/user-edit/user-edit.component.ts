import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  idUser: number;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit()
  {  
    window.scroll(0,0);
    if(environment.token == "")
    {
      alert("Sua sessão expirou");
      this.router.navigate(["/entrar"]);
    }

    this.idUser = this.route.snapshot.params['id'];
    this.findByIdUser(this.idUser);
  }

  conferirSenha(event: any)
  {

  }

  tipoUser(event: any)
  {

  }

  atualizar()
  {

  }

  findByIdUser(id: number)
  {
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp;
    })
  }
}
