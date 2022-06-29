import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRComponent } from './detail-r.component';

describe('DetailRComponent', () => {
  let component: DetailRComponent;
  let fixture: ComponentFixture<DetailRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
