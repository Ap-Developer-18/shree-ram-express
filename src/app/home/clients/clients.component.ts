import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients = [
    'Bharat Transport Corporation',
    'TCM Total Logistics',
    'Nirvaan Infracon Pvt Ltd',
    'CJ Darcl',
    'TCI Freight',
    'SPM Logistics Pvt Ltd',
    'Tej Carrier Pvt Ltd',
    'Go Ex Logistics Pvt Ltd',
    'Awagaman Logistics Pvt Ltd',
    'Interstate Logistics',
    'Shri Shyam Transways',
    'Nishtha Logistics'
  ];

  testimonials = [
    { quote: 'Excellent service and timely delivery. Highly recommended!', name: 'Pankaj Kumar', title: 'Bharat Transport Corporation' },
    { quote: 'Very professional team. Safe and reliable transportation.', name: 'Manohar Patil', title: 'Tej Carrier Pvt Ltd' },
    { quote: 'Affordable pricing with great service quality.', name: 'Subhash Sharma', title: 'SPM Logistics Pvt Ltd' },
    { quote: 'Best logistics partner for heavy cargo. Always on time.', name: 'Vikas Ji', title: 'Interstate Logistics' },
    { quote: 'Trusted partner for all our transportation needs.', name: 'Sanjay Kumar', title: 'Awagaman Logistics Pvt Ltd' }
  ];
}
