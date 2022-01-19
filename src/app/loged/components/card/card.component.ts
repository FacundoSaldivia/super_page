import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Super } from '../../models/superheroe';
import { NgbActiveModal, NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { style } from '@angular/animations';
import { UpdateList } from '../../services/update-list.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert:
    | NgbAlert
    | undefined;
  @Input() hero: Super;

  private _success = new Subject<string>();
  successMessage = '';

  constructor(
    private modalService: NgbModal,
    private updateListService: UpdateList
  ) {}
  changeSuccessMessage(message: string) {
    this._success.next(message);
  }

  addHero(hero: Super) {
    console.log(this.updateListService.listHeros);
    if (this.updateListService.listHeros.length >= 6) {
      this.changeSuccessMessage(
        'You already have 6 characters on your team...'
      );
    } else if (!this.updateListService.check(hero)) {
      this.changeSuccessMessage(
        `You already have 3 ${hero.biography.alignment} characters `
      );
    } else {
      this.updateListService.pushHero(hero);
    }
  }

  removeHero(hero: Super): void {
    this.updateListService.removeHero(hero);
    this.updateListService.updateListEvent();
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent, {
      windowClass: 'custom',
    });
    modalRef.componentInstance.hero = this.hero;
  }

  checkIfAdded(hero: Super): boolean {
    return this.updateListService.checkHero(hero);
  }

  ngOnInit(): void {
    this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }
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
