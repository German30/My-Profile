import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoverAnimationDirective } from './hover-animation-nav/hover-animation.directive';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HoverAnimationDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  title = 'Dev-Portfolio';

  navInicio = "Home";
  navAbaout = "Abaout";
  navSkills = "Skills";
  navProyects = "Proyects";
  navContact = "Contact";

  titleSecondWelcome = "Hi, I'm";
  titlethirtWelcome = "Germán Celestino";

}
