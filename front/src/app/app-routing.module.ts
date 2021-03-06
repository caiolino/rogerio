import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SbrenosComponent } from './sbrenos/sbrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { FormComponent } from './form/form.component';
import { FeedComponent } from './feed/feed.component';
import { AdmFeedComponent } from './adm-feed/adm-feed.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sbrenos', component: SbrenosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'deletar/:id', component: DeletarComponent },
  { path: 'form', component:FormComponent},
  { path: 'feed', component:FeedComponent},
  { path: 'adm-feed', component:AdmFeedComponent },
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
