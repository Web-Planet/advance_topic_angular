import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTComponent } from './detail-t.component';

describe('DetailTComponent', () => {
  let component: DetailTComponent;
  let fixture: ComponentFixture<DetailTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
