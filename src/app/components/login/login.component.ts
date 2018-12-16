import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogged } from '../../model/user-logged-model';
import { AuthenticationService } from '../../core/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Formulário de login
  loginForm: FormGroup;
  
  checkLogin = false;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.checkLogin = !this.loginForm.valid) {
      this.snackBar.open('Dados inválidos. Verifique-os e tente novamente', 'Fechar', {
        duration: 3000,
      });
      return false;
    }
    const user = new UserLogged(this.loginForm.get('username').value, this.loginForm.get('email').value);
      if (this.authService.autenticaUser(user)) {
        this.router.navigateByUrl('');
      }
  }

}
