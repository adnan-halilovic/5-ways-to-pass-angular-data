import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-child',
  imports: [FormsModule],
  templateUrl: './ng-model-child.component.html',
  styleUrls: ['./ng-model-child.component.scss']
})
export class NgModelChildComponent {
  value = model<string>('');
}
