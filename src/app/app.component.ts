import { Component, OnInit } from '@angular/core';
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

  text: string = '';
  fullText: string = 'System.out.print("Desarrollador Fullstack");'
  typingSpeed: number = 100;
  backspaceSpeed: number = 50;
  showCursor: boolean = true;
  
    ngOnInit(): void {
      this.startAnimation();
    }
  
    private startAnimation(): void {
      this.typeText();
    }
  
    private typeText(): void {
      let i = 0;
      const typingInterval = setInterval(() => {
        this.text += this.fullText[i];
        i++
        if (i >= this.fullText.length) {
          clearInterval(typingInterval);
          this.showCursor = false;
          setTimeout(() => {
            this.showCursor = true;
            this.eraseText();
          }, 1000);
        }
      }, this.typingSpeed);
    }
  
    private eraseText(): void {
      const backspaceInterval = setInterval(() => {
        this.text = this.text.slice(0, -1);
        if (this.text.length === 0) {
          this.showCursor = false;
          clearInterval(backspaceInterval);
          setTimeout(() => {
            this.showCursor = true;
            this.typeText();
          }, 1000);
        }
      }, this.backspaceSpeed);
    }
  
}
