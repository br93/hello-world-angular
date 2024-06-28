import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  helloWorld : string[]

  constructor() { 
    this.helloWorld = ['Hello world', 'Olá mundo', 'Bonjour monde', 'Hallo Welt', 'Ciao mondo', 'Hola mundo']
  }

  ngOnInit(): void {
  }


}
