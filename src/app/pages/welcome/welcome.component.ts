import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  imports: [DashboardComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}