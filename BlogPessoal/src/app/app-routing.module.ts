import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { TemaComponent } from './tema/tema.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';

const routes: Routes = [

    {path: '', redirectTo: 'entrar', pathMatch: 'full'},

    {path: 'entrar', component: EntrarComponent},
    {path: 'cadastrar', component: CadastrarComponent},
    {path: 'home', component: HomeComponent},
    
    {path: 'tema', component: TemaComponent},
    {path: 'user-edit/:id', component: UserEditComponent},
    {path: 'tema-edit/:id', component: TemaEditComponent},
    {path: 'tema-delete/:id', component: TemaDeleteComponent},
    {path: 'postagem-edit/:id', component: PostagemEditComponent},
    {path: 'postagem-delete/:id', component: PostagemDeleteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }