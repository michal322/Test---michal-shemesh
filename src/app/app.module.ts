
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {TableModule} from 'primeng/table';
import { ToastrModule } from 'ngx-toastr';
import { ListsComponent } from './lists/lists.component';
import {PaginatorModule} from 'primeng/paginator';
import { MultiSelectModule } from "primeng/multiselect";
import { RightNavBarComponent } from './right-nav-bar/right-nav-bar.component';
import { ProductService } from './_services/Product.service';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    ListsComponent,
    AppComponent,
    RightNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    PaginatorModule,
    MultiSelectModule,
    DropdownModule,
    // ToastrModule.forRoot({
    //   positionClass:'toastr-bottom-right'
    // }),

    TableModule,
    NgPipesModule,
  ],
  providers: [
    ProductService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
