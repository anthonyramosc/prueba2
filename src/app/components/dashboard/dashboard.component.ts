import { Component, LOCALE_ID, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }]
})

export class DashboardComponent {
  isModalOpen = false;
  isModalsOpen = false
  newEventText: string = '';
  currentCell: HTMLElement | null = null;
  currentDateObj: string | null = null;
  myForm: FormGroup;
  events: any[] = [];


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: [''],
      cedula: [''],
      description: ['']
    });

   
    const savedEvents = localStorage.getItem('events');
    this.events = savedEvents ? JSON.parse(savedEvents) : [];
    this.populateCalendarWithEvents();
  }

  openModal(cell: HTMLElement, date: string) {
    this.isModalOpen = true;
    this.currentCell = cell;
    this.currentDateObj = date;
  }

  closeModal() {
    this.isModalOpen = false;
    this.currentCell = null;
    this.currentDateObj = null;
    this.myForm.reset();
  }

  onSubmit() {
    if (this.myForm.valid ) {
      const newEvent = {
        id: this.events.length + 1,
        date: this.currentDateObj,
        name: this.myForm.value.nombre,
        cedula: this.myForm.value.cedula,
        description: this.myForm.value.description || 'Sin descripción'
      };

      this.events.push(newEvent);
      localStorage.setItem('events', JSON.stringify(this.events));

      if (this.currentCell) {
      this.currentCell.innerHTML += `<div>${newEvent.name} - ${newEvent.cedula}</div>`;
      }

      this.closeModal();
    } else {
      console.log('Formulario no válido');
      console.log(this.myForm.errors);
      console.log(this.myForm.get('nombre')?.errors);
      console.log(this.myForm.get('cedula')?.errors);
    }
  }

  populateCalendarWithEvents() {
    this.events.forEach(event => {
      const cell = document.querySelector(`td[data-date="${event.date}"]`);
      if (cell) {
        cell.innerHTML += `<div>${event.name} - ${event.cedula}</div>`;
      }
    });
  }

 
  


  

  timePicker = {
    format: '24', 
    showMeridian: true 
  };
  isMonthlyViewVisible = true;
  isWeeklyViewVisible = false;
  isDailyViewVisible = false;
 

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  currentDate = new Date();
  currentWeekStart = this.getStartOfWeek(new Date());
  currentDay = new Date();

  monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  daysInWeek = [
    "Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."
  ];

  hoursInDay = [
    
  "7:00am", "7:15am", "7:30am", "7:45am",
  "8:00am", "8:15am", "8:30am", "8:45am",
  "9:00am", "9:15am", "9:30am", "9:45am",
  "10:00am", "10:15am", "10:30am", "10:45am",
  "11:00am", "11:15am", "11:30am", "11:45am",
    "12:00am", "12:15am", "12:30am", "12:45am",
  "13:00pm", "13:15pm", "13:30pm", "13:45pm",
  "14:00pm", "14:15pm", "14:30pm", "14:45pm",
  "15:00pm", "15:15pm", "15:30pm", "15:45pm",
  "16:00pm", "16:15pm", "16:30pm", "16:45pm",
  "17:00pm", "17:15pm", "17:30pm", "17:45pm",
  "18:00pm", "18:15pm", "18:30pm", "18:45pm",
  "19:00pm", "19:15pm", "19:30pm", "19:45pm",
  "20:00pm", "20:15pm", "20:30pm", "20:45amp",
  "21:00pm", "21:15pm", "21:30pm", "21:45pm",
  "22:00pm", "22:15pm", "22:30pm", "22:45pm",
  "23:00pm", "23:15pm", "23:30pm", "23:45pm",
  "24:00pm"
  ];

  get weeksInMonth() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    
    let weeks = [];
    let week = [];
    for (let i = 0; i < firstDay; i++) {
      week.push({});
    }
    for (let day = 1; day <= daysInMonth; day++) {
      week.push({ day });
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      while (week.length < 7) {
        week.push({});
      }
      weeks.push(week);
    }
    return weeks;
  }

  get currentWeek() {
    const week = [];
    const start = new Date(this.currentWeekStart);
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      week.push(date);
    }
    return week;
  }

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

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }

  prevWeek() {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
    this.currentWeekStart = this.getStartOfWeek(this.currentWeekStart);
  }

  nextWeek() {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
    this.currentWeekStart = this.getStartOfWeek(this.currentWeekStart);
  }

  prevDay() {
    this.currentDay.setDate(this.currentDay.getDate() - 1);
    this.currentDay = new Date(this.currentDay); 
  }

  nextDay() {
    this.currentDay.setDate(this.currentDay.getDate() + 1);
    this.currentDay = new Date(this.currentDay); 
  }

  



  goToToday() {
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
    this.currentWeekStart = this.getStartOfWeek(new Date());
    this.currentDay = new Date();
  }

  

  isToday(day: number) {
    return this.currentYear === this.currentDate.getFullYear() &&
           this.currentMonth === this.currentDate.getMonth() &&
           day === this.currentDate.getDate();
  }

  private getStartOfWeek(date: Date): Date {
    const start = new Date(date);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(start.setDate(diff));
  }

  
}
