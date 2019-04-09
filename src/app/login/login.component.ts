import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  hero: Hero ={id: 1, name: 'Mr. Gary'};
  
  constructor() { }

  ngOnInit() {
  }

}
