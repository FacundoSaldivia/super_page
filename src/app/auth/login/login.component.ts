import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from '../models/user-model';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    email: new FormControl(''),
    password: new FormControl(''),
  });

  userAux: user = {
    email: 'challenge@alkemy.org',
    password: 'react',
  };

  ngOnInit(): void {
    this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  submit() {
    if (
      this.form.value.email == this.userAux.email &&
      this.form.value.password == this.userAux.password
    ) {
      localStorage.setItem('token', 'NOTACTUALLTOKENREAD"README"');
      this.router.navigateByUrl('/dashboard/home');
    } else {
      this.changeSuccessMessage('please enter a valid password / email');
    }
    // this.loginService.login(this.form.value).subscribe(
    //   (e) => {
    //     console.log(e);
    //     localStorage.setItem('token', e.token);

    //   },
    //   (error) => {
    //     this.changeSuccessMessage(error.error.error);
    //     console.log(error.error.error);
    //   }
    // );
  }
  changeSuccessMessage(message: string) {
    this._success.next(message);
  }
}
