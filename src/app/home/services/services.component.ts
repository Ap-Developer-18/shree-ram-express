import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { icon: 'fa-truck', title: 'Full Truck Load', desc: 'Safe & Fast Full Truck Load (FTL) transportation across India with customized route options.' },
    { icon: 'fa-trailer', title: 'High Bed Trailer', desc: 'Specialized heavy machinery and over-dimensional cargo transportation using high-capacity trailers.' },
    { icon: 'fa-truck-monster', title: 'Low Bed Trailer', desc: 'JCB, excavator, bulldozers, and heavy industrial machinery transport with hydraulic ramp configurations.' },
    { icon: 'fa-truck-flatbed', title: 'Semi Low Bed', desc: 'Heavy cargo specialist, offering flexible loading options for medium-to-heavy industrial equipment.' },
    { icon: 'fa-boxes-packing', title: 'Container Transport', desc: 'Secure containerized movement across major cities and dry ports, ensuring weather-proof transit.' },
    { icon: 'fa-gears', title: 'Machine Shifting', desc: 'End-to-end industrial plant layout relocation, factory machine loading, rigging, and placement services.' },
    { icon: 'fa-tractor', title: 'JCB Transport', desc: 'Dedicated loading ramps and operators for swift, secure, and cost-effective machine shifting.' }
  ];
}
