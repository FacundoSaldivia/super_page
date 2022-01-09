import { Component, Input, OnInit } from '@angular/core';
import { Super } from '../../models/superheroe';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { style } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() hero: Super;

  constructor(private modalService: NgbModal) {}
  verInfo(): void {
    console.log(this.hero);
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent, {
      windowClass: 'custom',
    });
    modalRef.componentInstance.hero = this.hero;
  }
  ngOnInit(): void {}
}

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'modal/hero.html',
  styleUrls: ['modal/hero.scss'],
})
export class NgbdModalContent {
  @Input() hero;

  checkEmpty(info: string): string {
    if (info == '' || info == '0' || info == '-') {
      return 'Unknown';
    } else {
      return info;
    }
  }
  constructor(public activeModal: NgbActiveModal) {}
}
