import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { EditGridService } from './edit-grid.service';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public view: Observable<GridDataResult>;
  public gridData: any[] = products;
  public listItems: Array<string> = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  public count: number = 1;
  createForm: FormGroup = new FormGroup({ items: new FormArray([]) });;
  data: GridDataResult = { data: this.gridData, total: this.gridData.length }
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public submitted = false;
  public editable = true;
  constructor(private editService: EditGridService) { }

  ngOnInit() {
    this.view = this.editService.gridData;

    this.editService.updateGridData(this.data);
    this.view.subscribe(r => {
      this.createForm.setControl('items', new FormArray(r.data.map(item =>
        new FormGroup({
          name: new FormControl(item.name),
          age: new FormControl(item.age),
        })
      )));
    });
  }

  addNewRow() {
    const blankRow = {
      name: "",
      age: "",
    };
    this.gridData = [blankRow, ...this.createForm.get('items').value];
    const data: GridDataResult = { data: this.gridData, total: this.gridData.length };
    this.editService.updateGridData(data);
  }

  onFocusOut(rowIndex) {
    (this.createForm.get("items") as FormArray).at(rowIndex).get('age').setValue(Math.random());
  }
}
