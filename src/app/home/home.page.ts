import { Component } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  level:any = 0;


  constructor(public NavCtrl: NavController, public batteryStatus: BatteryStatus) {

  this.batteryStatus.onChange().subscribe(status => {
    console.log(status.level, status.isPlugged);
  this.level = status.level;
    

  }
  )
}
}