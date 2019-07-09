import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AddEmployeeComponent } from './addemployeecomponent';
import { ShowEmployeeComponent} from './showemployeecomponent';
import {FormsModule} from '@angular/forms';
@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,ShowEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }