import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { NgcatalystModule } from "ngcatalyst";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EikosCardListDemoComponent } from "./eikos-card-list-demo/eikos-card-list-demo.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, EikosCardListDemoComponent],
  imports: [
    BrowserModule,
    NgcatalystModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
