import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

import {ApiService} from '@service/http/api.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ExcelService} from '@app/core/providers';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = [
    'id',
    'name',
    'unitType',
    'units',
  ];
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();

  dateFormCtrl = new FormControl('');
  unSubscribe = new Subject();

  constructor(
    private apiService: ApiService,
    private excelService: ExcelService
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
        this.dataSource.data = res.data;
      }
    });
  }

  download() {
    const fileName = new Date().toString() && this.dateFormCtrl.value.toString();
    this.excelService.exportAsExcelFile(this.dataSource.data, fileName);
  }

  private listenForDateChange() {
    this.dateFormCtrl.valueChanges.pipe(takeUntil(this.unSubscribe)).subscribe((date) => {
      this.setOrders(new Date(date));
    });
  }

  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

}
