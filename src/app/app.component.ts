import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rias-dev';

  scroll1(seccion:HTMLElement){
    seccion.scrollIntoView()
  }

  scroll2(seccion:HTMLElement){
    seccion.scrollIntoView()
  }
  scroll3(seccion:HTMLElement){
    seccion.scrollIntoView()
  }
  scroll4(seccion:HTMLElement){
    seccion.scrollIntoView()
  }
  scroll5(seccion:HTMLElement){
    seccion.scrollIntoView()
  }
  

}
