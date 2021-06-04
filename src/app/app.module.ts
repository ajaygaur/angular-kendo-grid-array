import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditGridService } from './edit-grid.service';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, GridModule, DropDownsModule, ReactiveFormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [EditGridService]
})

export class AppModule { }
