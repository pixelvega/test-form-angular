import { FormGroup, FormControl } from '@angular/forms';
import { User } from './../models/user.model';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formulario: FormGroup
  user: User
  identificador: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    // Recuperamos el identificador que forma parte de la ruta -> params
    this.activatedRoute.params.subscribe(params => {
      // Almacenamos el identificador dentro de una propiedad
      this.identificador = params.identificador;
      // Recuperamos el usuario a través del identificador con un método definido en el servicio.
      this.usersService.getById(params.identificador).then(response => {
        this.user = response;
        // Generamos el formulario a partir de los datos del usuario
        this.formulario = new FormGroup({
          name: new FormControl(this.user.name),
          day: new FormControl(''),
          month: new FormControl(''),
          year: new FormControl(''),
          surname: new FormControl(this.user.surname),
          identification: new FormControl(this.user.identification),
          gender: new FormControl(this.user.gender),
          email: new FormControl(this.user.email),
          emailCopy: new FormControl(''),
          password: new FormControl(this.user.password),
          passwordCopy: new FormControl('')
        })
      })
    })
  }

  enviarFormulario() {
    this.usersService.update(this.identificador, this.formulario.value).then(response => {
      this.router.navigate(['/']);
    })
  }

}
