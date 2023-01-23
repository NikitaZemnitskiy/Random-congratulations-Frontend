import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
  selector: 'app-login',
  templateUrl: './login.components.html',
  styleUrls: ['./login.components.css'],
})
export class LoginComponents {
  @Input() currentUser: string;
  @Output() dataChanged: EventEmitter<any> = new EventEmitter<any>()

  login(username: string) {
    this.dataChanged.emit({
      currentUser: username,
    })

  }
}


