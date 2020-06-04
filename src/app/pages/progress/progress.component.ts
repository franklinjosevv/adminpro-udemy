import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  porcentaje: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  sumarPorcentaje(): void{
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
  }

}
