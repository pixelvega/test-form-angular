import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
  
export class NewUserComponent implements OnInit {
  formulario: FormGroup;
  errores: any[];

  constructor(private usersService: UsersService, private router: Router) { 
    this.formulario = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      dni: new FormControl(''),
      identification: new FormControl(''),
      day: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      emailCopy: new FormControl(''),
      passwordCopy: new FormControl(''),
      password: new FormControl('')
    });
    this.errores = [];
  }

  ngOnInit() {
  }
  
  async envioFormulario() {
    try {
      let response = await this.usersService.create(this.formulario.value);
      this.router.navigate(['/']);
    } catch (err) {
      this.errores = err.error;
    }
  }

  hayError(control): string {
    let error = this.errores.find(item => item.param === control)
    if (error) {
      return error.msg
    } else {
      return "";
    }
  }

}
