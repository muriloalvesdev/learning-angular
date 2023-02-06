import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogsComponent } from './error-dialogs.component';

describe('ErrorDialogsComponent', () => {
  let component: ErrorDialogsComponent;
  let fixture: ComponentFixture<ErrorDialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDialogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
