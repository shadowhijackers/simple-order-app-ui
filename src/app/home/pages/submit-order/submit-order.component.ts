import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '@service/http/api.service';
import {MessageService} from '@shared/providers';
import {AppStateService} from '@app/core/states/app-state.service';

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
    private msgService: MessageService,
    private appState: AppStateService,
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      unitType: ['', Validators.required],
      units: ['', Validators.required]
    });
  }


  submit() {
    if (this.orderForm.valid) {
      const payload = {...this.orderForm.value };
      this.apiService.saveOrder(payload).subscribe((res: any) => {
        if (!res.error) {
          this.msgService.showSnackBar('Your order is submitted');
          return;
        }
        this.msgService.showSnackBar(res.error);
      });
    }
  }

}
