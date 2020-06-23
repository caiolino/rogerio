import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { SbrenosComponent } from './sbrenos/sbrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { FeedComponent } from './feed/feed.component';
import { FormComponent } from './form/form.component';
import { OrderModule } from 'ngx-order-pipe';
import { AdmFeedComponent } from './adm-feed/adm-feed.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SbrenosComponent,
    ContatoComponent,
    UsuariosComponent,
    FormularioComponent,
    EditarComponent,
    DeletarComponent,
    FeedComponent,
    FormComponent,
    AdmFeedComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
