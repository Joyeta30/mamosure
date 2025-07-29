import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {
type: boolean = true;
isLogin = false;
  constructor(
   private  authService: AuthService,
   private router:Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
   changeType(){
    this.type =!this.type;
  }

  onSubmit(form: NgForm) {
 console.log(form);
 if(!form.valid) return;
 this.login(form);
  }

login(form){
this.isLogin = true;
this.authService.login(form.value.email,form.value.password).then(data=>{
     console.log(data);
     this.router.navigateByUrl('/tabs');
     this.isLogin= false;
     form.reset();
})
.catch(e => {
  console.log(e)
  this.isLogin = false;
});
}
 



}