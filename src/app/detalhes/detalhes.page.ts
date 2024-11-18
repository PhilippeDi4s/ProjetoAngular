import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetalhesPage implements OnInit {
  public nome: string = "";
  public imagem: string = "";

  constructor(private route:ActivatedRoute, private pokeAPI:PokeAPIService) { }

  ngOnInit() {
    this.nome = this.route.snapshot.paramMap.get("nome") || '';
    const dados = await this.pokeAPI.buscarPokemon(this.nome);
    this.imagem = dados.sprites.other.dream_world.front_default;
  }

}
