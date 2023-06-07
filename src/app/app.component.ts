import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  passwordMeter: number = 0;

  isRed: boolean = false;

  actualPassword: string = "";

  checkPassword()
  {
    if(this.actualPassword === "")
    {
      this.passwordMeter = 0
      return;
    }

    if(this.actualPassword.length < 8)
    {
      this.isRed = true;
      this.passwordMeter = 100;
      return;
    }
    else
    {
      this.isRed = false;
    }

    if(/[A-Za-z]+/.test(this.actualPassword) && /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+/.test(this.actualPassword) &&
    /[A-Za-z]+/.test(this.actualPassword) && /[0-9]+/.test(this.actualPassword) &&
    /[0-9]+/.test(this.actualPassword) && /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+/.test(this.actualPassword))
    {
      this.passwordMeter = 100
      return;
    }
    
    if(/[A-Za-z]+/.test(this.actualPassword) && /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+/.test(this.actualPassword) ||
    /[A-Za-z]+/.test(this.actualPassword) && /[0-9]+/.test(this.actualPassword) ||
    /[0-9]+/.test(this.actualPassword) && /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+/.test(this.actualPassword)
    )
    {
      this.passwordMeter = 66
      return;
    }

    if(/^[0-9]*$/.test(this.actualPassword) 
    || /^[A-Za-z]*$/.test(this.actualPassword) 
    || /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(this.actualPassword))
    {
      this.passwordMeter = 33;
      return;
    }
  }
}