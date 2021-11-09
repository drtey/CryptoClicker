import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GamedataService } from '../gamedata.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  light = 0.3
  light2 = 0.3
  light3 = 0.3

  constructor(private game: GamedataService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.checkLight()
    },200)
   
  }

  checkLight() {
    if (this.game.getCryptos() >= this.getPriceOfTech(0)) {
      this.light = 1
    }
    else {
      this.light = 0.3
    }

    if (this.game.getCryptos() >= this.getPriceOfTech(1)) {
      this.light2 = 1
    }
    else {
      this.light2 = 0.3
    }
    
    if (this.game.getCryptos() >= this.getPriceOfTech(2)) {
      this.light3 = 1
    }
    else {
      this.light3 = 0.3
    }
    
  }
  
  buyTech(typeOfTech: number) {
    this.game.buyTech(typeOfTech)
  }

  getNumberOfTech(typeOfTech: number){
    return this.game.getNumberOfTech(typeOfTech)
  }

  getPriceOfTech(typeOfTech: number){
    return this.game.getPriceOfTech(typeOfTech)
  }

  getHashRateOfTech(typeOfTech: number){
    return this.game.getHashRateOfTech(typeOfTech)
  }

  
}
