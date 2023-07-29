import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Person, PersonService } from '../services/person.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface personData{
  id: number;
  nombre: string;
  apellido: string;
  email: string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  array: any[] = [];
  nuevoItem: any = {};
  datoModificado: any = {};
  private apiUrlper = "http://localhost:8080/ms-datasource/v1.0/api/person";
person: any;

     constructor (
        private personService:PersonService,
        private router: Router ,
        private alertController : AlertController) 
        {}
        loadPosts() {
          this.personService.getPerson().subscribe(
            (res) => {
              this.person = res;
            },
            (err) => console.log(err)
          );
        }
        
        ngOnInit() {
          this.loadPosts();
        }
        
        ionViewWillEnter() {
          this.loadPosts();
        }
        
        async removePost(id: number) {
          const alert = await this.alertController.create({
            header: "Alert",
            subHeader: "Subtitle",
            message: "This is an alert message.",
            buttons: [
              "Cancel",
              {
                text: "Okay",
                handler: () => {
                  this.personService.deletePerson(id).subscribe(
                    (res) => {
                      console.log(res);
                      this.loadPosts();
                    },
                    (err) => console.log(err)
                  );
                },
              },
            ],
          });
        
          await alert.present();
        }
        }