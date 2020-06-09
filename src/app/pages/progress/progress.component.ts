import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  porcentajeAzul: number = 10;
  porcentajeVerde: number = 40;
  nombre: string = 'franklin';

  constructor() { }

  ngOnInit(): void {
  }

  actualizarAzul( event: number ) {
    this.porcentajeAzul = event;
    console.log('evento : ', event );
  }
  actualizarVerde( event: number ) {
    this.porcentajeVerde = event;
    console.log('evento : ', event );
  }

 /*sumarPorcentaje(): void{
    if (this.porcentaje >= 100){
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0){
      this.porcentaje = 0;
    }
    this.porcentaje += 5;
    console.log(this.porcentaje);
  }

  restarPorcentaje(): void{
    if (this.porcentaje <= 0){
      this.porcentaje = 0;
      return;
    }
    if (this.porcentaje >= 100){
      this.porcentaje = 100;
    }
    this.porcentaje -= 5;
    console.log(this.porcentaje);
  }*/

}
