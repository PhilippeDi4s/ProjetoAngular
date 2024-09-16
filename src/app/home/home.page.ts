import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {

  public nome = "";

public items:any[] = [
  {
    titulo: "Forró"
  },
  {
    titulo: "Rock"
  },
  {
    titulo: "Sertanejo"
  },
  {
    titulo: "Funk"
  },
]

  constructor() { }

    adicionar(){
      // ADICIONANDO NO ARRAY
      this.items.push(
        {
          titulo: this.nome
        }
      );
      // LIMPANDO CAMPO NOME
      this.nome = "";
    }

    remover(posicao:number){
      console.log(posicao);
      this.items.splice(posicao,1);
    }
}
