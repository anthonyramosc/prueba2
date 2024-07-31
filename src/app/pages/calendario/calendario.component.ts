import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  template: `
    <div class="container">
      <h1>Selecciona una fecha</h1>
      <input type="text" bsDatepicker placeholder="Selecciona una fecha">
    </div>
  `,
  styles: [`
    .container {
      margin: 20px;
    }
    h1 {
      margin-bottom: 10px;
    }
    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
    }
  `]
})
export class CalendarioComponent { }
