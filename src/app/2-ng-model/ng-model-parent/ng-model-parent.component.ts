import { Component } from '@angular/core';
import { NgModelChildComponent } from "../ng-model-child/ng-model-child.component";

@Component({
  selector: 'app-ng-model-parent',
  imports: [NgModelChildComponent],
  templateUrl: './ng-model-parent.component.html',
  styleUrl: './ng-model-parent.component.scss'
})
export class NgModelParentComponent {
  parentValue = 'Initial value';
}
