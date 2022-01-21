import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sign-off-button',
  templateUrl: './sign-off-button.component.html',
  styleUrls: ['./sign-off-button.component.scss'],
})
export class SignOffButtonComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  open() {
    const modalRef = this.modalService.open(ModalSignOff);
  }
}
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'modal/sign-off.html',
  styleUrls: ['modal/sign-off.scss'],
})
export class ModalSignOff {
  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  signOff(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
    this.activeModal.close();
  }
}
