import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = { name: '', email: '', phone: '', message: '' };
  submitted = false;
  private wa = '919371039184';

  submitForm(f: any) {
    if (f.valid) {
      this.submitted = true;
      const msg = `Hi! New Contact Inquiry:%0A%0A*Name:* ${this.form.name}%0A*Phone:* ${this.form.phone}%0A*Email:* ${this.form.email}%0A*Message:* ${this.form.message}`;
      setTimeout(() => {
        window.open(`https://wa.me/${this.wa}?text=${msg}`, '_blank');
        this.form = { name: '', email: '', phone: '', message: '' };
        this.submitted = false;
        f.resetForm();
      }, 1000);
    }
  }
}
