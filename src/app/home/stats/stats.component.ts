import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  stats = [
    { icon: 'fa-users', number: '60+', label: 'Happy Clients', sublabel: '' },
    { icon: 'fa-boxes-stacked', number: '1500+', label: 'Successful Deliveries', sublabel: '' },
    { icon: 'fa-map-location-dot', number: '26+', label: 'States Covered', sublabel: '' },
    { icon: 'fa-earth-asia', number: '3+', label: 'Countries Covered', sublabel: 'Nepal • Bhutan • Bangladesh' }
  ];
}
