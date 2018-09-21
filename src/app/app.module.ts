import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlatformHeaderComponent } from './components/platform-header/platform-header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PlatformHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [Title, Meta, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
