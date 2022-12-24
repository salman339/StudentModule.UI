import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiersComponent } from './notifiers.component';

describe('NotifiersComponent', () => {
  let component: NotifiersComponent;
  let fixture: ComponentFixture<NotifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
