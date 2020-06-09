import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  constructor() {
    console.log('leyenda : ', this.leyenda);
    console.log('porcentaje : ', this.porcentaje);
  }

  ngOnInit(): void {
    console.log('leyenda : ', this.leyenda);
    console.log('porcentaje : ', this.porcentaje);
  }

  onChangest( newValor: number){
    let elemtHTML: any = document.getElementsByName('porcentaje')[0];

    if (this.porcentaje >= 100){
      this.porcentaje = 100;
    }else if (this.porcentaje <= 0){
      this.porcentaje = 0;
    }else{
      this.porcentaje = newValor;
    }

    elemtHTML.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);
  }

  sumarPorcentaje(): void{
    if (this.porcentaje >= 100){
      this.porcentaje = 100;
      this.cambioValor.emit(this.porcentaje);
      return;
    }
    if (this.porcentaje <= 0){
      this.porcentaje = 0;
      this.cambioValor.emit(this.porcentaje);
    }
    this.porcentaje += 5;
    this.cambioValor.emit(this.porcentaje);
    // console.log(this.porcentaje);
  }

  restarPorcentaje(): void{
    if (this.porcentaje <= 0){
      this.porcentaje = 0;
      this.cambioValor.emit(this.porcentaje);
      return;
    }
    if (this.porcentaje >= 100){
      this.porcentaje = 100;
      this.cambioValor.emit(this.porcentaje);
    }
    this.porcentaje -= 5;
    this.cambioValor.emit(this.porcentaje);
    // console.log(this.porcentaje);
  }

}
