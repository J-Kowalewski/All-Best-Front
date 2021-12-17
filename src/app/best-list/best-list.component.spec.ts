import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestListComponent } from './best-list.component';

describe('BestListComponent', () => {
  let component: BestListComponent;
  let fixture: ComponentFixture<BestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
