import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { ExchangeRateModel } from 'src/app/_models/exchange-rate.models';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  exchangeRate: ExchangeRateModel = new ExchangeRateModel();
  data: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private masterService: MasterService,
    // private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.masterService.getExchangeRate().subscribe(res => {
      this.exchangeRate = res;
    });
  }

  createForm() {
    this.form = this.fb.group({
      amount_local: [0, Validators.required],
      amount_foreign: [0, Validators.required],
      operation: ['buy']
    });
  }

  changeOperation(value: string = '') {
    let operation
    if (value) {
      operation = value
    } else {
      operation = this.form.get('operation')?.value
      if (operation == 'buy') {
        operation = 'sale'
      } else {
        operation = 'buy'
      }
    }

    this.form.get('operation')?.setValue(operation)
    this.calculate()
  }

  calculate(field = 'amount_local') {
    let operation = this.form.get('operation')?.value;
    let rate = operation == 'buy' ? this.exchangeRate.rate_buy : this.exchangeRate.rate_sale;
    let amount = this.form.get(field)?.value;
    let total = 0;

    // console.log({operation})

    if (field == 'amount_local') {
      total = amount / rate
    }

    if (field == 'amount_foreign') {
      total = amount * rate
    }

    let fieldExit = field == 'amount_local' ? 'amount_foreign' : 'amount_local';

    this.form.get(fieldExit)?.setValue((total).toFixed(2))
  }

  onSubmit() {
    let data = this.form.value
    localStorage.setItem('calculator', JSON.stringify(data))
    // this.store.dispatch(new InitForm())
    this.router.navigate(['/operations/add'])
  }

}
