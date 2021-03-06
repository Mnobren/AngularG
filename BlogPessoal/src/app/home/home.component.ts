import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem();
  listaPostagem: Postagem[];
  tema: Tema = new Tema();
  listaTemas : Tema[];
  idTema : number;
  user: User = new User();
  idUser = environment.id;

  constructor(private router: Router, private postagemService: PostagemService, private temaService: TemaService,
              private authService: AuthService) { }

  ngOnInit()
  {
    if(environment.token == "")
    {
      alert("Sua sessão expirou");
      this.router.navigate(["/entrar"]);
    }
    this.findAllPostagem();
    this.findAllTema();
  }

  findAllTema()
  {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    })
  }

  findByIdTema()
  {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  findAllPostagem()
  {
    this.postagemService.getAllPostagem().subscribe((resp:  Postagem[]) => {
      this.listaPostagem = resp;
    })
  }

  findByIdUser()
  {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp;
    })
  }

  publicar()
  {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;
    this.user.id = this.idUser;
    //this.postagem.usuario = this.user;
    //alert(this.postagem.titulo+", "+this.postagem.texto+", "+this.postagem.tema.descricao+", "+this.postagem.usuario.nome+".");
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      alert("Postagem realizada com sucesso");
      this.postagem = new Postagem();
      this.findAllPostagem();
    })
  }
}
