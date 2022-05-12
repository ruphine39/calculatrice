import { Component, OnInit } from '@angular/core';

const ERROR = 'SYNTAXE_ERROR';


@Component({
  selector: 'app-calculatrice2',
  templateUrl: './calculatrice2.page.html',
  styleUrls: ['./calculatrice2.page.scss'],
})
export class Calculatrice2Page implements OnInit {

  public operation = '';

  constructor() { }

  ngOnInit() {
  }

  effacer(): void {
    this.operation = '';
  }

  effacer1(): void {
    if (this.operation === ERROR) {
      this.operation = '';
    }
    try {
      // eslint-disable-next-line no-eval
      this.operation = this.operation.slice(0, -1);;
    } catch {
      this.operation = '';
    }
  }

  egale(): void {
    try {
      // eslint-disable-next-line no-eval
      this.operation = eval(this.operation);
    } catch {
      this.operation = ERROR;
    }
  }

  taper(n: any): void {
    if (this.operation === ERROR) {
      this.operation = '';
    }
    this.operation += n;
  }

}
