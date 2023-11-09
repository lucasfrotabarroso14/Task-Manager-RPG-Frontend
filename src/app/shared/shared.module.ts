import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ASharedDirectiveDirective } from './directives/a-shared-directive.directive';
import { ASharedPipePipe } from './pipes/a-shared-pipe.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    ASharedDirectiveDirective,
    ASharedPipePipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
