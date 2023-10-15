import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'atn-header',
  templateUrl: 'header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
