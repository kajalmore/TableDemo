import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';
import { FormsModule } from '@angular/forms';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertPipe,
    UploadfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
