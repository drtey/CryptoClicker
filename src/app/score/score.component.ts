import { Component, OnInit } from '@angular/core';
import { GamedataService } from '../gamedata.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private game:GamedataService) { }

  ngOnInit(): void {
  }

  getCryptos(){
    return this.game.getCryptos()
  }

  getHashRate(){
    return this.game.getHashRate()
  }

  getshowClick() {
    return this.game.showClick()
  }

}
