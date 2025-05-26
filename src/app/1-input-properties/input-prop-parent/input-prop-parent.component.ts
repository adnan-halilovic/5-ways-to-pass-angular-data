import { Component } from '@angular/core';
import { InputPropChildComponent } from "../input-prop-child/input-prop-child.component";

@Component({
  selector: 'app-input-prop-parent',
  imports: [InputPropChildComponent],
  templateUrl: './input-prop-parent.component.html',
  styleUrl: './input-prop-parent.component.scss'
})
export class InputPropParentComponent {
  parentName = 'Angular';
}
