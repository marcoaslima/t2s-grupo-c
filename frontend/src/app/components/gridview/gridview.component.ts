import { Component, OnInit } from '@angular/core';
import { CoworkersService } from 'src/app/services/coworkers/coworkers.service';

@Component({
  selector: 'gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})

export class GridviewComponent implements OnInit
{

  coworkers = [];

  constructor(service: CoworkersService){
    this.coworkers = service.getCoworkers();
  }

  ngOnInit(){

  }
}
