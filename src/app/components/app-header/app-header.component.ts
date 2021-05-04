import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../auth/shared/services/auth.service';

@Component({
  selector: 'app-app-header',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Output()
  logout = new EventEmitter<any>();

  @Input()
  user: User;
  constructor() { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.logout.emit();
  }

}
