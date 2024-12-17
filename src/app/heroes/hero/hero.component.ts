import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string ='Marlon';
  public age: number = 36;

 get capitalizedName():string{

  return this.name.toUpperCase();

 }

 getHeroDescription():string {
  return `${this.name} - ${this.age}`
 }

 changeHero():void{

  this.name = 'iroman';

 }

 changeAge(){

  this.age = 45;

 }

 resetForm():void{
  this.name ='Marlon';
  this.age = 36;
 }

}
