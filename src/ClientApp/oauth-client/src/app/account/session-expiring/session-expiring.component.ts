import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-session-expiring',
  templateUrl: './session-expiring.component.html',
  styleUrls: ['./session-expiring.component.scss']
})
export class SessionExpiringComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private authService: AuthService) { }

  ngOnInit(): void {
  }

  get sessionExpiresIn(): number {
    return this.authService.sessionExpiresIn;
  }

  async extendSession() {
    await this.authService.silentRenew();
    this.activeModal.close();
  }
}
