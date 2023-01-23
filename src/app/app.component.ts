import {Component, ViewChild} from '@angular/core';
import {IMessage} from "./models/message";
import {messages as data} from "./data/messages";
import {LoginComponents} from "./login/login.components";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(LoginComponents)
  viewChild: LoginComponents

  dataFromLoginChangeHandler(data: any) {
    this.currentUser = data.currentUser
  }

  title = 'my-app';
  currentUser: string;
  messages: IMessage[] = data
}
