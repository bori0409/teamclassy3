import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Rest} from 'src/app/models/rest.modal';
import {RestService} from 'src/app/services/rest.service' ; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
/*
  public rooms = [
    {name: 'Copenhagen', temp: 'Hot', air: 'Good', humidity: 'Dry'},
    {name: 'Roskilde', temp: 'Cold', air: 'Not Good', humidity: 'Moist'}
    ];*/

  constructor(private restservices : RestService) { }

  ngOnInit() {
    this.retrieveTut();
  }
  restobj: Rest[];
  retrieveTut(): void {
    this.restservices.getAll()
      .subscribe(
        data => {
          this.restobj = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  changeRoom(restobj){
    console.log(restobj.title);
    document.getElementsByClassName('roomName')[0].innerHTML = restobj.description;
   // document.getElementsByClassName('statusText')[0].innerHTML = room.temp;
    //document.getElementsByClassName('statusText')[1].innerHTML = room.air;
   // document.getElementsByClassName('statusText')[2].innerHTML = room.humidity;
    
  }

}
