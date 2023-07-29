import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Person, PersonService } from '../services/person.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  deletePerson(arg0: any) {
    throw new Error('Method not implemented.');
    }
    
      person: Person[] = [];

    
      constructor(
        private personService: PersonService,
        private alertController: AlertController
      ) {}
    
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