import { ItemComponent } from './component/item/item.component';
import { ItemFormComponent } from './component/item-form/item-form.component';
import { ItemListComponent } from './component/item-list/item-list.component';
import { ItemListService } from './services/item-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemFormComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
