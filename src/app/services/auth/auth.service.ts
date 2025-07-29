import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StorageService) { }
  async login(email:string,password:string): Promise<any> {
      // call login page
      return await this.storage.setStorage('uid','ASDFGHJKL');
  }
  register(){}

  resetPassword(){}

  logout(){}
}
