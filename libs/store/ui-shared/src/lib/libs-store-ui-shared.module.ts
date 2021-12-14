import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FeatureGameDetailModule } from '@bg-hoard/feature-game-detail';

@NgModule({
  imports: [CommonModule, MatToolbarModule, FeatureGameDetailModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class LibsStoreUiSharedModule {}
