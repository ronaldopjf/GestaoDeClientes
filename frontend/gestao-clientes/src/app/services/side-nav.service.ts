import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SideNavService {
  public isSidebarClosed: Subject<boolean> = new Subject<boolean>();

  public toggleSidebar(toggle: boolean): void {
    this.isSidebarClosed.next(toggle);
  }
}
