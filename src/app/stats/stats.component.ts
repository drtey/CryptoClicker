import { Component, OnInit } from '@angular/core';
import { GamedataService } from '../gamedata.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private game: GamedataService) { }

  ngOnInit(): void {
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

  getNameOfTech(typeOfTech: number){
    return this.game.getNameOFTech(typeOfTech)
  }
}

