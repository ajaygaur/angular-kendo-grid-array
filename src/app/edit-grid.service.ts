import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Injectable()
export class EditGridService {
  private gridDataSource = new BehaviorSubject<any>({});
  gridData = this.gridDataSource.asObservable();

  updateGridData(data: any) {
    console.log(data);
    this.gridDataSource.next(data);
  }
}