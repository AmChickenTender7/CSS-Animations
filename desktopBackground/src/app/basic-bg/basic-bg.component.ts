import { Component } from '@angular/core';


@Component({
  selector: 'app-basic-bg',
  standalone: true,
  imports: [],
  templateUrl: './basic-bg.component.html',
  styleUrl: './basic-bg.component.css'
})
export class BasicBGComponent {
  /* 0 Black 1 White */  
  bgColor: boolean = true;
  changeBG(){
    if(this.bgColor == true){this.bgColor = false}
    else(this.bgColor = true)
    console.log("Changed")
  }
}
