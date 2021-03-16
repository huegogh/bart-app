import { Component, OnInit } from '@angular/core';
import './home.component.css';
import { DropdownComponent } from '../../components/universal/dropdown/dropdown.component'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentMessage = 'Hello';
  faMapMarker = faMapMarker;
  constructor() { }

  ngOnInit(): void {
  }

}
