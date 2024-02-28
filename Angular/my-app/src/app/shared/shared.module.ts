import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { LimistLengthPipe } from './limist-length.pipe';
import { HighLightPipe } from './high-light.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';

@NgModule({
  declarations: [LimistLengthPipe, HighLightPipe, CustomDirectiveDirective],
  exports: [
    FormsModule,
    LimistLengthPipe,
    CustomDirectiveDirective,
    HighLightPipe, // tempConverter
    MatButtonModule,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
