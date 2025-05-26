import { Component } from '@angular/core';
import { CPChildComponent } from "../c-p-child/c-p-child.component";

@Component({
  selector: 'app-c-p-parent',
  imports: [CPChildComponent],
  templateUrl: './c-p-parent.component.html',
  styleUrl: './c-p-parent.component.scss'
})
export class CPParentComponent {
  headerTitle: string = 'Box Title from Parent';
  content: string = 'This content is projected from the parent component!';
}
