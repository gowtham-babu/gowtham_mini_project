import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {
  public cel:any
  public fah: any
  
  constructor() { }

  ngOnInit(): void {
  }

ftoc(value: any) {
  let temp = (Number(value) - 32) * (5 / 9);
  this.cel = Math.round(temp * 10) / 10;
}

ctof(value: any) {
  let temp = Number(value) * 1.8 + 32;
  this.fah = Math.round(temp * 10) / 10;
}
}
