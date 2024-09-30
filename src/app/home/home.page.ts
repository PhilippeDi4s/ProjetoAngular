import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  constructor() {}

  public altura: number | undefined;
  public peso: number | undefined;
  public valorImc: number | undefined;
  public classificacao: string="";

  calcularImc (){
    if(this.altura && this.peso){
      this.valorImc = (this.peso/(this.altura*this.altura));

      if(this.valorImc< 18.5 ){
        this.classificacao='Abaixo do peso';
      }else

      if(this.valorImc >= 18.5 && this.valorImc < 25 ){
        this.classificacao='Peso normal';
      }else

      if(this.valorImc >= 25 && this.valorImc < 30 ){
        this.classificacao='Sobrepeso';
      }else

      if(this.valorImc >= 30){
        this.classificacao='Obesidade';
      }

    }
  }
}

