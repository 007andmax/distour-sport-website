import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(public afAuth: AngularFireAuth,
    private http: HttpClient,) { }

  public logOut () {
    
    return this.http.get(`${this.apiUrl}logout`);
  }
  public checkUser() {
    return this.http.get(`${this.apiUrl}checkuser`);
  }
  public signIn(code) {
    return this.http.post(`${this.apiUrl}singin`, { code: code });
  }
  

  public doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

}
