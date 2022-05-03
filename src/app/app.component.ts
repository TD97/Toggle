import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'togg';
  isShowDiv= true;
  isShowDiv1=true;
  toggleDisplayDiv(){
    this.isShowDiv=!this.isShowDiv;
  }
  toggleDisplayDiv1(){
    this.isShowDiv1=!this.isShowDiv1;

  }
}
