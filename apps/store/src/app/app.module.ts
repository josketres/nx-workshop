import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { LibsStoreUiSharedModule } from '@bg-hoard/libs/store/ui-shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    MatCardModule,
    LibsStoreUiSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
