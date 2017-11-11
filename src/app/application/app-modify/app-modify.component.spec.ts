import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModifyComponent } from './app-modify.component';

describe('AppModifyComponent', () => {
  let component: AppModifyComponent;
  let fixture: ComponentFixture<AppModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
