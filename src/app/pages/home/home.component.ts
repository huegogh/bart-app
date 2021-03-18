import { Component, OnInit } from '@angular/core';
import './home.component.css';
import { DropdownComponent } from '../../components/universal/dropdown/dropdown.component'
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  delayReport = '';
  currentMessage = 'Hello';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.GetHomeInfo().subscribe({
      next: data => {
        this.delayReport = data.root.bsa[0].description["#cdata-section"];
        console.log(this.delayReport)
      }
    })
  }

}
