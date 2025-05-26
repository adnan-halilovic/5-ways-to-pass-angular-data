import { Component, inject } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-shared-service-child',
  imports: [],
  templateUrl: './shared-service-child.component.html',
  styleUrl: './shared-service-child.component.scss',
})
export class SharedServiceChildComponent {
  // Two ways of getting data from a signal based service
  // 1. Using the signal directly
  dataService = inject(DataServiceService);

  // 2. Using a getter
  get data(){
    return this.dataService.currentData();
  }
}
