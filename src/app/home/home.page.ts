import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public operation = '';

  constructor() { }

  ngOnInit() {
  }

  effacer(): void {
    this.operation = '';
  }

  effacer1(): void {

    if (this.operation === 'ERREURE DE SYNTAXE') {
      this.operation = '';
    }

    try {
      // eslint-disable-next-line no-eval
      this.operation = this.operation.slice(0, -1);
    } catch {
      this.operation = 'ERREURE DE SYNTAXE';
    }
  }

  egale(): void {
    try {

      // eslint-disable-next-line no-eval
      this.operation = eval(this.operation);
    } catch {
      this.operation = 'ERREURE DE SYNTAXE';
    }
  }

  taper(n: any): void {
    this.operation = this.operation + '' +n;
  }

}
