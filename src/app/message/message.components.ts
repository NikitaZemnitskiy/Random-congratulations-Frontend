import {Component, Input} from "@angular/core";
import {IMessage} from "../models/message";


@Component({
  selector: 'app-message',
  templateUrl: './message.components.html',
  styleUrls: ['./message.components.css'],
})
export class MessageComponents {
  @Input() currentUser: string
  currentMessage: IMessage;
  currentError: boolean = false;
  isBothMessageSend: boolean = false;
  isMessageAlreadyReceived: boolean = false;

  getMessage() {
    fetch("http://localhost:8080/getMessage")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.currentMessage = data
      })
    this.isMessageAlreadyReceived = true;
  }

  async sendMessages(text1: String, text2: String) {
    if (text1?.length > 0 && text2?.length > 0) {
      await this.sendMessage(text1);
      await this.sendMessage(text2);
      this.currentError = false;
      this.isBothMessageSend = true;
    } else {
      this.currentError = true;
    }
  }

  async sendMessage(text: String) {
    await fetch("http://localhost:8080/sendMessage", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user": this.currentUser,
        text
      })
    })
  }
}


