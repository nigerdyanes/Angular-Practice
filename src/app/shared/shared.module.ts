import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../material/material.module";

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule,MaterialModule,RouterModule],
  exports: [PageNotFoundComponent,HeaderComponent,FooterComponent],
})
export class SharedModule {}
