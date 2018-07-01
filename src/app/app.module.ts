import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestInlineComponent } from './test-inline/test-inline.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { BindingClassesComponent } from './binding-classes/binding-classes.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentChildComponent } from './parent-child/parent-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestInlineComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    BindingClassesComponent,
    StyleBindingComponent,
    TemplateReferenceComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    ParentChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
