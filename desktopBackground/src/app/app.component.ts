import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BasicBGComponent } from './basic-bg/basic-bg.component';
import { AnimatedBGComponent } from './animated-bg/animated-bg.component';
import { SpotifyComponent } from './spotify/spotify.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    BasicBGComponent,
    SpotifyComponent,
    AnimatedBGComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'desktopBackground';
}
