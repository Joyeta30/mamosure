import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {

  // type: boolean = true;
  // isLogin = false;

  // constructor(
  //   private authService: AuthService, 
  //   private router: Router, 
  //   private global: GlobalService) { }

  ngOnInit() {
  }

//   changeType() {
//     this.type = !this.type;
//   }

//   onSubmit(form: NgForm) {
//     console.log(form);
//     if(!form.valid) return;
//     this.login(form);
//   }

//   login(form) {
//     this.isLogin = true;
//     this.authService.login(form.value.email, form.value.password).then(data => {
//       console.log(data);
//       this.navigate(data);
//       this.isLogin = false;
//       form.reset();
//     })
//     .catch(e => {
//       console.log(e);
//       this.isLogin = false;
//       let msg: string = 'Could not sign you in, please try again.';
//       if(e.code == 'auth/user-not-found') msg = 'E-mail address could not be found';
//       else if(e.code == 'auth/wrong-password') msg = 'Please enter a correct password';
//       this.global.showAlert(msg);
//     });
//   }

//   navigate(data?) {    
//     let url = Strings.TABS;
//     if(data == 'admin') url = Strings.ADMIN;
//     this.router.navigateByUrl(url);
//   }

// }
}