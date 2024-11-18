import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  public nome:string = "";
  
  constructor(private router:Router) {}

  verificar(){
    this.router.navigate(["/detalhes", this.nome]);
  }
}
