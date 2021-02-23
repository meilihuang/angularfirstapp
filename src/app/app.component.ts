import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  hasil = 0;
  a = 0;
  b = 0;

  item = [
    {nama: "Jeruk", harga: 15000, satuan: "kg"},
    {nama: "Apel", harga: 5000, satuan: "kg"}
  ]

  tampil : boolean = false;
  tulisanOPEN : String; 

  OPEN(){
    this.tulisanOPEN = "TOKO DIBUKA";
    alert("DIBUKA");
  }

  value = "";
  onKey(event: any){
    this.value+= event.target.value+"|";
  }
}
