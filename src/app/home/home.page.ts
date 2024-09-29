import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() { }
  public notaA: number | undefined;
  public notaB: number | undefined;
  public media: number | undefined;
  public situacao: string = "";
  calcularMedia() {
    if (this.notaA && this.notaB) {
      this.media = (this.notaA + this.notaB) / 2;
      this.situacao = this.media >= 7 ? 'Aprovado' : 'Reprovado';
    }
  }
}
