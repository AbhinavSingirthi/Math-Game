import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GameBodyComponent } from './game-body/game-body.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { EmojiBoxComponent } from './emoji-box/emoji-box.component';
import { FormsModule } from '@angular/forms';
import { AboutSectionComponent } from './about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GameBodyComponent,
    ErrorComponent,
    LoginComponent,
    UserListComponent,
    EmojiBoxComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
