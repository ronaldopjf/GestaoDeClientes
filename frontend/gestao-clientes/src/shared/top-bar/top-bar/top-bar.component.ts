import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { ClientForList } from 'src/app/models/client/clientForList';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public client: ClientForList;

  public constructor(private authService: AuthService) {
    this.authService.client.subscribe(x => this.client = x);
  }

  public ngOnInit(): void { }

  public toggleMenu(): void {
  }

  public logout(): void {
    this.authService.logout();
  }
}
