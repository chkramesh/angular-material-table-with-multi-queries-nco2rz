import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { HttpModule, Http } from '@angular/http';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
// import { HomeComponent } from './home/home.component';
// import { SearchComponent } from './search/search.component';
// import { OthersComponent } from './others/others.component';
// import { AddressComponent } from './address/address.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../server/in-memory-data.service';

import { ConfirmService } from './services/confirm-dialog/confirm.service';
import { ConfirmComponent } from './services/confirm-dialog/confirm.component';
import { MessagesComponent } from './services/messages-service/messages.component';
import { MessagesService } from './services/messages-service/messages.service';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { EditMemberComponent } from './members/edit-member/edit-member.component';
import { AddMemberComponent } from './members/add-member/add-member.component';
import { AddEditFormComponent } from './members/add-edit-form/add-edit-form.component';
import { UpdateDatatableService } from './services/update-datatable.service';

import { FormErrorsService } from './services/form-validation/form-errors.service';
import { ErrorMatcherService } from './services/form-validation/form-validators.service';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { UniqueNameService } from './services/unique-name.service';

import 'hammerjs';

// import { MatTabsModule } from '@angular/material';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  // { path: 'search', component: SearchComponent },
  // { path: 'others', component: OthersComponent },
  // { path: 'address', component: AddressComponent }
];

@NgModule({
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    // MatTabsModule,
    HttpModule, 
    FormsModule, ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    MaterialModule, FlexLayoutModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent, 
    // HelloComponent, 
    HomeComponent, 
    MembersComponent,
    ConfirmComponent,
    MessagesComponent,
    EditMemberComponent,
    AddMemberComponent,
    AddEditFormComponent
    // SearchComponent, 
    // OthersComponent,
    // AddressComponent
  ],
  providers: [
    MembersComponent,
    HttpClientModule,
    HttpService,
    ConfirmService,
    MessagesService,
    FormErrorsService,
    UpdateDatatableService,
    UniqueNameService,
    {provide: ErrorMatcherService, useClass:     ShowOnDirtyErrorStateMatcher},
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmComponent,
    MessagesComponent,
    EditMemberComponent,
    AddMemberComponent,
  ],
})
export class AppModule { }
