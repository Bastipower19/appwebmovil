import { Component, OnInit } from '@angular/core';
import { Person, PersonService } from '../services/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-rest',
  templateUrl: './form-rest.page.html',
  styleUrls: ['./form-rest.page.scss'],
})
export class FormRestPage implements OnInit {
  person: Person = {
    Nombre: "",
    Apellido:  "",
    Email: "",
  };
  editing = false;

  datoModificado: any = {};

  constructor(
    private router: Router,
    private personService: PersonService,
    private actiavtedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
      const personId = this.actiavtedRoute.snapshot.paramMap.get('personId');
      if (personId) {
        this.personService.getPersonById(personId).subscribe(
          (res: Person) => {
            this.person = res;
            this.editing = true;
          }
        );
      }
    }
    saveDatos(): void {
      const persona = { /* tus datos a enviar */ };
  
      this.personService.savePersona(this.person).subscribe(
        response => {
          // Manejar la respuesta de la API si es necesario
          console.log('Respuesta de la API:', response);
        },
        error => {
          // Manejar errores de la API si los hay
          console.error('Error en la solicitud:', error);
        }
      );
    }
    
      updatePers() {
        // Verificar que el id no sea undefined
        if (this.person.id !== undefined) {
          this.personService.updatePers(this.person.id, {
            Nombre: this.person.Nombre,
            Apellido: this.person.Apellido,
            Email: this.person.Email,
          })
          .subscribe((res) => {
            console.log(res);
            this.editing = false;
          });
        } 
      }
    }