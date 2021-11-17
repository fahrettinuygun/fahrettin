import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(){
    let elements = document.getElementsByClassName('content-container');
    if(elements && elements.length > 0){
      let color = elements[0].getAttribute('style');
      if( color && color.indexOf('#424242')> -1){
        elements[0].setAttribute('style', 'background-color: #f5f5f5')
      }
      else{
        elements[0].setAttribute('style', 'background-color: #424242')
      }
    }
  }

}
