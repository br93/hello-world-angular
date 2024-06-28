import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    HelloComponent,
    HelloWorldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent
  ]
})
export class HelloModule { }
