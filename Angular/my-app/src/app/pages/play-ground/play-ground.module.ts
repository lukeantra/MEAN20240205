import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DirectiveComponent, PipeComponent],
  imports: [CommonModule, SharedModule],
  exports: [DirectiveComponent, PipeComponent],
})
export class PlayGroundModule {}
