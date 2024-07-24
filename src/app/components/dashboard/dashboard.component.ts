import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone : true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isMonthlyViewVisible = true;
  isWeeklyViewVisible = false;
  isDailyViewVisible = false;

  showMonthlyView() {
    this.isMonthlyViewVisible = true;
    this.isWeeklyViewVisible = false;
    this.isDailyViewVisible = false;
  }

  showWeeklyView() {
    this.isMonthlyViewVisible = false;
    this.isWeeklyViewVisible = true;
    this.isDailyViewVisible = false;
  }

  showDailyView() {
    this.isMonthlyViewVisible = false;
    this.isWeeklyViewVisible = false;
    this.isDailyViewVisible = true;
  }

  addEvent(event: any) {
    const cell = event.target;
    const eventText = prompt("Ingrese el evento:");
    if (eventText) {
      cell.innerHTML = eventText;
    }
  }

  
}
