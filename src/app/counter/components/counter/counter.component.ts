import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-counter',
  template: `
  <p>{{counter}}</p>


  <button (click)="increaseBy(1)">+1</button>
  <button (click)="decreaseBy(1)">-1</button>
  <button (click)="ResetBy()">Reset</button>`
})

export class CounterComponent  {

  constructor() { }

  public counter: number = 10;

 increaseBy(value:number):void{

  this.counter = this.counter + 1;
 }

 decreaseBy(value:number):void{

  this.counter -=1;
 }

 ResetBy():void{

  this.counter =10;
 }

}
