import { Component, ViewChild } from '@angular/core';
import { VCChildComponent } from '../v-c-child/v-c-child.component';

@Component({
  selector: 'app-v-c-parent',
  imports: [VCChildComponent],
  templateUrl: './v-c-parent.component.html',
  styleUrl: './v-c-parent.component.scss'
})
export class VCParentComponent {
  @ViewChild(VCChildComponent) child!: VCChildComponent;
  
  ngAfterViewInit() {
    // Avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.child.updateMessage('Initial message from parent');
    });
  }
  
  sendToChild() {
    this.child.updateMessage('New message from parent!');
  }
}
