import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem'

@Component({
  selector: 'app-adm-feed',
  templateUrl: './adm-feed.component.html',
  styleUrls: ['./adm-feed.component.css']
})
export class AdmFeedComponent implements OnInit {
  listaPostagem: Postagem[]
  postagem: Postagem = new Postagem

  key = 'data_postagem'
  reverse = true

  constructor(private postagemService: PostagemService) {

  }

  ngOnInit(): void {
    this.findAllPostagem()
  }
  findAllPostagem() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp

    })
  }

}
