import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  hide = true;

  @Output() logged: EventEmitter<boolean> = new EventEmitter();

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  authSubscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  login() {
    if (
      this.loginForm.valid &&
      this.loginForm.value.username &&
      this.loginForm.value.password
    ) {
      let user: User = new User(
        this.loginForm.value.username,
        this.loginForm.value.password
      );

      this.authSubscription = this.authService.login(user).subscribe(
        (response) => {
          if (response) {
            console.log(`Token: ${response.token}`);
            sessionStorage.setItem('Token', response);
            this.authService.setLoggedIn(true);
            this.router.navigate(['/home']);
          } else {
            alert('Error: No Token Received');
            sessionStorage.removeItem('Token');
          }
        },
        (error) => {
          alert('You must provide a username and a valid password');
        }
      );
    }
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
