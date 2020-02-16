import { Component, ViewEncapsulation,
  ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'jw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  private element: any;
  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    const modal = this;
    document.body.appendChild(this.element);
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className === 'jw-modal') {
        modal.close();
      }
    });
    this.modalService.modal = this;
  }

  ngOnDestroy() {
    this.modalService.remove();
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
}
