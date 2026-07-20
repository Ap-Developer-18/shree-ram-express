import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() openQuote = new EventEmitter<void>();

  mobileOpen = false;
  activeSection = 'home';

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.checkActiveSection());
    }
  }

  toggleMobile() { this.mobileOpen = !this.mobileOpen; }

  scrollToSection(id: string) {
    this.mobileOpen = false;
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); this.activeSection = id; }
  }

  checkActiveSection() {
    const sections = ['home', 'services', 'why-us', 'clients', 'contact'];
    const pos = window.scrollY + 120;
    for (const s of sections) {
      const el = document.getElementById(s);
      if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
        this.activeSection = s; break;
      }
    }
  }
}
