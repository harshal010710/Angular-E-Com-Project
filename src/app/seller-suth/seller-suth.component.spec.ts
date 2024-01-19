import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSuthComponent } from './seller-suth.component';

describe('SellerSuthComponent', () => {
  let component: SellerSuthComponent;
  let fixture: ComponentFixture<SellerSuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerSuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerSuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
