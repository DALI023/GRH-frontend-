import {Component, OnInit,NgModule} from '@angular/core';


import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected styleUrls for multiple styles
})
export class LoginComponent implements OnInit  {
  form: any = {
    username: null,
    email: null,
    password: null,
    tel: null,
    image: null,
    twoFactorCode: null
  };
  constructor(private userService: AuthService, private storageService: StorageService, private router: Router) { }
  isLoggedIn = false;
  roles: string[] = [];

  signUpForm: any = {
    username: null,
    password: null,

  };
  exposantForm: any = {
    username: null,
    email: null,
    password: null,
    tel: null,
    image: null,
    twoFactorCode: null // Add twoFactorCode property
  };
  exposantRegistrationVisible = false;
  test = true;
  isLoginFailed = false;
  errorMessage = '';
  password: any;
  test1=true;

  onSignUp(): void {
    const { username, password } = this.signUpForm;

    this.userService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  reloadPage(): void {
    window.location.reload();
  }
  onClick():void{
    this.test=!this.test;
  }
  onClick1():void{
    this.test1=!this.test1;
  }
  onClickExposant() {
    this.exposantRegistrationVisible = true;
  }

 /* onSubmit(): void {
    this.onFileChange(event);

    const { username, email, password, tel, image } = this.form;
    this.userService.register(username, email, password, tel, image).subscribe({
      next: data => {

        console.log('Registration successful:', data);


        this.test=!this.test;
      },
      error: err => {

        console.error('Registration error:', err);
      }
    });
  }*/
  /*registerExposant(): void {
    const { username, email, password, tel, image } = this.exposantForm;
    this.userService.registerExposant(username, email, password, tel, image).subscribe({
      next: data => {
        console.log('Exposant registration successful:', data);
        // You can perform additional actions or navigate to a different page upon successful registration.
      },
      error: err => {
        console.error('Exposant registration error:', err);
        // Handle the error, show a message, or perform other actions.
      }
    });
  }*/
  onFileChange(event: any): void {
    const file = event?.target?.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {

        if (this.form) {
          this.form.image = '/assets/' + file.name;
        }
      };

      reader.readAsDataURL(file);
    }
  }
  showForgotPasswordForm = false;
  forgotPasswordForm: any = {
    email: null
  };
  forgotPasswordClicked(): void {
    this.showForgotPasswordForm = !this.showForgotPasswordForm;
    if (!this.showForgotPasswordForm) {
      this.forgotPasswordForm.email = null;
    }
  }

  /*sendResetPasswordEmail(): void {
    const { email } = this.forgotPasswordForm;

    this.userService.forgotPassword(email).subscribe(
      () => {
        console.log('Reset password email sent successfully!');

      },
      (error) => {
        console.error('Error sending reset password email:', error);

      }
    );
  }*/

  /*registerWithGoogle(): void {
    this.userService.registerWithGoogle().subscribe({
      next: (data: any) => {
        console.log('Registration with Google successful:', data);
        // Handle successful registration with Google, e.g., navigate to another page
      },
      error: (error: any) => {
        console.error('Error registering with Google:', error);
        // Handle error, show a message, or perform other actions
      }
    });
  }*/
}


/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*loginForm!: FormGroup; // Define loginForm as FormGroup

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  submitted = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private fb: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required], // Initialize form controls with validators
      password: [null, Validators.required]
    });

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    this.submitted = true;
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });

  }

  reloadPage(): void {
    window.location.reload();
  }
  */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
*/
