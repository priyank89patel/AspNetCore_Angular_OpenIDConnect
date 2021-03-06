import { Component, OnInit } from '@angular/core';
import { Log } from 'oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'oauth-client';
  
  ngOnInit(){
    Log.logger = console;
    Log.level = Log.DEBUG;
  }
}
