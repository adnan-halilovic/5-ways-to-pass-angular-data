import { Component } from '@angular/core';

@Component({
  selector: 'app-v-c-child',
  imports: [],
  templateUrl: './v-c-child.component.html',
  styleUrl: './v-c-child.component.scss'
})
export class VCChildComponent {
  message: string = '';
  
  updateMessage(msg: string) {
    this.message = msg;
  }
}
