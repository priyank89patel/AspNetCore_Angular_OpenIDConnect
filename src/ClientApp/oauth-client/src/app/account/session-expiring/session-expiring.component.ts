import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-session-expiring',
  templateUrl: './session-expiring.component.html',
  styleUrls: ['./session-expiring.component.scss']
})
export class SessionExpiringComponent implements OnInit {
  counter: number = 60;
  constructor(public activeModal: NgbActiveModal, private authService: AuthService) { }

  ngOnInit(): void {
    timer(0, 1000).subscribe(
      () => {
        if (this.counter === 0)
          this.signOut();
        this.counter--;
      }
    );
  }

  async signOut() {
    await this.authService.signOut();
  }

}
