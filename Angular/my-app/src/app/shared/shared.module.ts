import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LimistLengthPipe } from './limist-length.pipe';

@NgModule({
  declarations: [LimistLengthPipe],
  exports: [FormsModule, LimistLengthPipe],
  imports: [CommonModule],
})
export class SharedModule {}
