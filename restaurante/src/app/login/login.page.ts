import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login(form) {
    var usuario = form.value["usuario"];
    var contrasena = form.value["password"];

    if (usuario == "admin" && contrasena == "123") {
      console.log('admin entrance noises')
      this.router.navigate(['productos'])
    }
  }
}
