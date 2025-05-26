import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private dataSource = signal<string>('Initial Value');
  currentData = this.dataSource.asReadonly();

  updateData(data: string) {
    this.dataSource.set(data);
  }
}
