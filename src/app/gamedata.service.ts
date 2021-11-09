import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamedataService {
  
  private cryptos: number = 0
  private HashRate: number = 0
  private cryptosPerClick: number = 1

  private techs = [
    {
      name: "Graphics Card",
      hashrate: 1,
      number: 0,
      price: 150
    },
    {
      name: "Mining Rig",
      hashrate: 10,
      number: 0,
      price: 1000
    },
    {
      name: "Mining Farm",
      hashrate: 100,
      number: 0,
      price: 10000
    }
  ]

  constructor() {
    
   }

  public addClick() {
    this.cryptos += this.cryptosPerClick * 10
  }

  public showClick() {
      let clicks = this.cryptosPerClick * 10 + this.totalTech()
    return clicks
  }

  public buyTech(typeOfTech: number) {
    
    if (this.cryptos >= this.techs[typeOfTech].price) {

      this.techs[typeOfTech].number++

      this.recalculeHashRate()
      
      this.cryptos -= this.techs[typeOfTech].price
      
      this.techs[typeOfTech].price = Math.ceil(this.techs[typeOfTech].price * 1.15)
    }
  }

  public getCryptos(): number {
    return this.cryptos
  }

  public getHashRate(): number {
    return this.HashRate
  }

  public getHashRateOfTech(typeOfTech: number) {
    return this.techs[typeOfTech].hashrate
  }

  public getNumberOfTech(typeOfTech: number) {
    return this.techs[typeOfTech].number
  }

  public getPriceOfTech(typeOfTech: number) {
    return this.techs[typeOfTech].price
  }

  public getNameOFTech(typeOfTech: number) {
    return this.techs[typeOfTech].name
  }

  public oneSecond() {
    this.cryptos += this.HashRate
    console.log("onesecond")
  }

  public recalculeHashRate() {
    let HsR: number = 0
    this.techs.forEach(tech => {
      HsR += tech.number * tech.hashrate
    })
    this.HashRate = HsR
    console.log(this.HashRate)
  }

  totalTech() {
    return this.getNumberOfTech(0) + this.getNumberOfTech(1) + this.getNumberOfTech(2)
  }

}
