import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})

export class PageTitleComponent implements OnInit
{
  title = "Lista de funcionários"

  constructor(){}

  ngOnInit(){

  }
}
