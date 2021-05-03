import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  authSubscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^(?=.*[a-z]).{6,12}$'),
        ]),
      ],
    });
  }

  submitRegister() {
    if (
      this.registerForm.valid &&
      this.registerForm.value.email &&
      this.registerForm.value.password
    ) {
      let user: User = new User(
        this.registerForm.value.email,
        this.registerForm.value.password
      );
      console.table(user);
      this.authSubscription = this.registerService.register(user).subscribe();
      this.router.navigate(['/login']);
    }
  }
}
