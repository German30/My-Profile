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
  fullText: string[] = [
    'System.out.print("Spring Boot");', 
    'Console.WriteLine("Angular Cli");', 
    'print(MySQL)', 
    'cout << "Postgres SQL";',
    'console.log("Oracle DB");'];
  currentText: number = 0;
  typingSpeed: number = 100;
  backspaceSpeed: number = 50;
  showCursor: boolean = false;

  ngOnInit(): void {
    this.startAnimation();
  }

  private startAnimation(): void {
    this.typeText();
  }

  private typeText(): void {
    const full = this.fullText[this.currentText];
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < full.length) {
        this.text += full[i];
        i++;
      } else {
        clearInterval(typingInterval);
        this.showCursor = true;
        setTimeout(() => {
          this.showCursor = false;
          this.eraseText();
        }, 3000);
      }
    }, this.typingSpeed);
  }
  private eraseText(): void {
    const backspaceInterval = setInterval(() => {
      if(this.text.length > 0) {
        this.text = this.text.slice(0, -1);
      } else {
        clearInterval(backspaceInterval);
        this.showCursor = false;
        this.currentText = (this.currentText + 1) % this.fullText.length;
        setTimeout(() => {
          this.typeText();
        }, 1000);
      }
    }, this.backspaceSpeed);
  }
}
