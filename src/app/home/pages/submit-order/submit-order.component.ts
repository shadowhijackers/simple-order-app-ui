import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '@service/http/api.service';
import {MessageService} from '@shared/providers';

@Component({
  selector: 'app-submit-order',
  templateUrl: './submit-order.component.html',
  styleUrls: ['./submit-order.component.scss']
})
export class SubmitOrderComponent implements OnInit {

  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private msgService: MessageService
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      unitType: ['', Validators.required],
      unit: ['', Validators.required]
    });
  }


  submit() {
    if (this.orderForm.valid) {
      this.apiService.saveOrder(this.orderForm.value).subscribe((res: any) => {
        if (!res.error) {
          this.msgService.showSnackBar('Your order is submitted');
          return;
        }
        this.msgService.showSnackBar(res.error);
      });
    }
  }

}
