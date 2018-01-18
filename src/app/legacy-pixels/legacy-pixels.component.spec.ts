import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyPixelsComponent } from './legacy-pixels.component';

describe('LegacyPixelsComponent', () => {
  let component: LegacyPixelsComponent;
  let fixture: ComponentFixture<LegacyPixelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacyPixelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyPixelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
