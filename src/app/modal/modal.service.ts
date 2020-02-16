import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal;

  remove() {
    this.modal = null;
  }

  open() {
    this.modal.open();
  }

  close() {
    this.modal.close();
  }
}
