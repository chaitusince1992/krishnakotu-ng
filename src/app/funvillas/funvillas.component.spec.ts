import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunvillasComponent } from './funvillas.component';

describe('FunvillasComponent', () => {
  let component: FunvillasComponent;
  let fixture: ComponentFixture<FunvillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunvillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunvillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
