import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoverAnimationDirective } from './hover-animation-nav/hover-animation.directive';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cibSpring, cibAngular, cibDotNet, cibPostgresql, cibMysql, cibGithub, cibFilezilla, cibUbuntu, cibPostman, cibAndroidAlt } from '@coreui/icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HoverAnimationDirective, IconModule ],
  providers: [IconSetService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{

  title = 'Dev-Portfolio';

  navInicio = "Home";
  navAbaout = "Abaout";
  navSkills = "Skills";
  navProyects = "Proyects";
  navContact = "Contact";
  navSectionSecond = "About Me";
  title3 = "Un Apasionado de la Programación";
  text1 = "Soy un programador con 4 años de experiencia en la creación de aplicaciones web y software. Mi pasión por la programación se combina con sólidas habilidades en Java, HTML, CSS,  Angular.";
  text2 = "Además, tengo experiencia en la gestión de proyectos utilizando herramientas como Microsoft Project y Trello. Mi enfoque en la resolución de problemas y la entrega de soluciones de alta calidad incluyendo el desarrollo de aplicaciones de control de acceso y sistemas de inventario.";

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

  dataTitle1 = "Name:";
  dataTitle2 = "Location";
  dataTitle3 = "Email";
  dataTitle4 = "Status";
  
  dataText1 = "Germán Marcelo Celestino Chávez";
  dataText2 = "Monterrey, N.L";
  dataText3 = "germancelestino98@gmail.com";
  dataText4 = "Bajo contrato de tiempo completo";

  btnDownload = "Download CV";

  constructor(private iconSetService: IconSetService) {
    iconSetService.icons = { cibSpring, cibAngular, cibDotNet, cibPostgresql, cibMysql, cibGithub, cibFilezilla, cibUbuntu, cibPostman, cibAndroidAlt };
  }

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
   
