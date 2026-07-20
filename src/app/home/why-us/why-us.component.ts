import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent {
  features = [
    { title: 'PAN India Transport', desc: 'Network coverage spanning all major highways, remote areas, and state gateways.' },
    { title: 'GPS Tracking Enabled', desc: 'Keep continuous track of your machinery shipments and receive route updates.' },
    { title: '24×7 Operations Support', desc: 'Round-the-clock coordination control room monitoring delivery safety.' },
    { title: 'Experienced Drivers', desc: 'Licensed heavy equipment vehicle operators with route knowledge.' },
    { title: 'Safe & Damage-free Delivery', desc: 'Rigorous securement practices, locking mechanisms, and padding layouts.' },
    { title: 'Affordable Pricing Models', desc: 'Honest quotes, optimized route planning, and competitive FTL pricing.' }
  ];
}
