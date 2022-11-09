import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {

  constructor() { }

  async makePayment() {
    console.log('Open browser!');
    await Browser.open({ url: 'http://capacitorjs.com/' });
  }

}
