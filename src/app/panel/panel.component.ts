import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
weather: any;
time: any;
forecast1: any;
forecast2: any;
forecast3: any;
forecast4: any;
  constructor(
    private travel: TravelService
    ) { }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails() {
    this.travel.getWeatherDetails().subscribe((val: any) => {
      this.weather = val.result;
      this.forecast1 = val.result[0];
      this.forecast2 = val.result[1];
      this.forecast3 = val.result[2];
      this.forecast4 = val.result[3];
      console.log(this.forecast1);
    });
  }

}
