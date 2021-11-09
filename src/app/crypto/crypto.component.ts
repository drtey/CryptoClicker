import { Component, OnInit } from '@angular/core';
import { GamedataService } from '../gamedata.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  constructor(private game:GamedataService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.game.oneSecond()
      this.game.recalculeHashRate()
    },1000)
  }

  addClick(){
    this.game.addClick()
  }

}
