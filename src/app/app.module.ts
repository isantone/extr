import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuBtnComponent } from './common/menu/menu-btn/menu-btn.component';
import { MenuComponent } from './common/menu/menu.component';
// import { ClipboardDirective } from './clipboard.directive';
import { ClipDirective } from './common/clip-dir/clipboard.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBtnComponent,
    MenuComponent,
    // ClipboardDirective,
    ClipDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
