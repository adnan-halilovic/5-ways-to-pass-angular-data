import { Component, inject } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { SharedServiceChildComponent } from "../shared-service-child/shared-service-child.component";

@Component({
  selector: 'app-shared-service-parent',
  imports: [SharedServiceChildComponent],
  templateUrl: './shared-service-parent.component.html',
  styleUrl: './shared-service-parent.component.scss'
})
export class SharedServiceParentComponent {
  dataService = inject(DataServiceService);
  sendData() {
    this.dataService.updateData('Data from parent via service!');
  }
}
