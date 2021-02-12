import { Component } from '@angular/core';
import { FirestoreService } from './../../services/firestore.service';
import { Tarea } from './../../tarea';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tareaEditando:Tarea;
  constructor(private fireStoreService: FirestoreService) {
    this.tareaEditando = {} as Tarea;
  }
  insertarTarea(){
    this.fireStoreService.insertar("tareas", this.tareaEditando).then(
      () => {
        console.log("La tarea se creo satisfactoriamente");
        this.tareaEditando = {} as Tarea
      }, (error) => {
        console.log(error);
      }
    );
  }
}
