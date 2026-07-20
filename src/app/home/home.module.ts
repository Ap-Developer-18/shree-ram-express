import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { StatsComponent } from './stats/stats.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { QuoteModalComponent } from './quote-modal/quote-modal.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [StatsComponent, HeaderComponent, HeroComponent, ServicesComponent, WhyUsComponent, ClientsComponent, ContactComponent, FooterComponent, QuoteModalComponent, HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  exports: [StatsComponent, HeaderComponent, HeroComponent, ServicesComponent, WhyUsComponent, ClientsComponent, ContactComponent, FooterComponent, QuoteModalComponent]
})
export class HomeModule { }
