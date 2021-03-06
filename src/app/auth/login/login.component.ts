import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  private _success = new Subject<string>();
  successMessage = '';
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert:
    | NgbAlert
    | undefined;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  submit() {
    this.loginService.login(this.form.value).subscribe(
      (e) => {
        console.log(e);
        localStorage.setItem('token', e.token);
        this.router.navigateByUrl('/dashboard/home');
      },
      (error) => {
        this.changeSuccessMessage(error.error.error);
        console.log(error.error.error);
      }
    );
  }
  changeSuccessMessage(message: string) {
    this._success.next(message);
  }
}
