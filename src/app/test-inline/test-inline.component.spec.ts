import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInlineComponent } from './test-inline.component';

describe('TestInlineComponent', () => {
  let component: TestInlineComponent;
  let fixture: ComponentFixture<TestInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
