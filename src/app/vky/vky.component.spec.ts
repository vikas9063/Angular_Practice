import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkyComponent } from './vky.component';

describe('VkyComponent', () => {
  let component: VkyComponent;
  let fixture: ComponentFixture<VkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VkyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
