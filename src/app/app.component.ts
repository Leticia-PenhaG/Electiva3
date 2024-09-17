import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1: number = this.retornarAleatorio();
  valor2: number = this.retornarAleatorio();
  valor3: number = this.retornarAleatorio();
  valor4: number = this.retornarAleatorio();
  valor5: number = this.retornarAleatorio();
  resultado: string = '';

  retornarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.valor4 = this.retornarAleatorio();
    this.valor5 = this.retornarAleatorio();
    this.resultado = this.verificarCombinacion();
  }

  verificarCombinacion(): string {
    let valores = [this.valor1, this.valor2, this.valor3, this.valor4, this.valor5];
    valores.sort(); 
  
    const escalera1 = [1, 2, 3, 4, 5];
    const escalera2 = [2, 3, 4, 5, 6];
  
    if (valores[0] === valores[1] && valores[0] === valores[2] && valores[0] === valores[3] && valores[0] === valores[4]) {
      this.resultado = 'Generala';
    } 
    else if (valores[0] === valores[1] && valores[0] === valores[2] && (valores[3] === valores[4])) {
      this.resultado = 'Full';
    } 
    else if (valores[0] === valores[1] && valores[0] === valores[2] && valores[0] === valores[3]) {
      this.resultado = 'Poker';
    } 
    else if (
      (valores[0] === escalera1[0] && valores[1] === escalera1[1] && valores[2] === escalera1[2] && valores[3] === escalera1[3] && valores[4] === escalera1[4]) ||
      (valores[0] === escalera2[0] && valores[1] === escalera2[1] && valores[2] === escalera2[2] && valores[3] === escalera2[3] && valores[4] === escalera2[4])
    ) {
      this.resultado = 'Escalera';
    } 
    else {
      this.resultado = 'No hay combinación ganadora';
    }
  
    return this.resultado;
  }
}



