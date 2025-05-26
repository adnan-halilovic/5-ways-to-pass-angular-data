import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-prop-child',
  imports: [],
  templateUrl: './input-prop-child.component.html',
  styleUrl: './input-prop-child.component.scss'
})
export class InputPropChildComponent {
  name = input<string>('');
}
