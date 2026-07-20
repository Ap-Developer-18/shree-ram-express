import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quote-modal',
  templateUrl: './quote-modal.component.html',
  styleUrls: ['./quote-modal.component.css']
})
export class QuoteModalComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  form = { name: '', email: '', phone: '', service: 'ftl', from: '', to: '', weight: '', message: '' };
  submitted = false;
  private wa = '919371039184';

  submitForm(f: any) {
    if (f.valid) {
      this.submitted = true;
      const msg = `Hi! New Quote Request:%0A%0A*Name:* ${this.form.name}%0A*Phone:* ${this.form.phone}%0A*Email:* ${this.form.email}%0A*Service:* ${this.form.service}%0A*From:* ${this.form.from}%0A*To:* ${this.form.to}%0A*Weight:* ${this.form.weight}%0A*Details:* ${this.form.message}`;
      setTimeout(() => {
        window.open(`https://wa.me/${this.wa}?text=${msg}`, '_blank');
        this.form = { name: '', email: '', phone: '', service: 'ftl', from: '', to: '', weight: '', message: '' };
        this.submitted = false;
        this.close.emit();
        f.resetForm();
      }, 1000);
    }
  }
}
