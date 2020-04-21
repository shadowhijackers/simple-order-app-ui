import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

import {ApiService} from '@service/http/api.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

let data = {
  name: 'Rice',
  unitType: 'Kg',
  units: 1,
};

let datas = Array.from({length: 100}, (i) => data);


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(datas);
  displayedColumns: string[] = [
    'id',
    'name',
    'unitType',
    'units',
  ];
  candidateSearchControl = new FormControl('');
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();

  dateFormCtrl = new FormControl('');
  unSubscribe = new Subject();

  constructor(
    private apiService: ApiService,
  ) {
  }

  ngOnInit() {
    this.setOrders(new Date());
    this.listenForDateChange();
    this.dataSource.paginator = this.paginator;
  }

  setOrders(selectedDate) {
    this.apiService.getOrders(selectedDate).subscribe((res: any) => {
      if (!res.error) {
        this.dataSource.data = res;
      }
    });
  }

  private listenForDateChange() {
    this.dateFormCtrl.valueChanges.pipe(takeUntil(this.unSubscribe)).subscribe((date) => {
      this.setOrders(date);
    });
  }

  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

}
