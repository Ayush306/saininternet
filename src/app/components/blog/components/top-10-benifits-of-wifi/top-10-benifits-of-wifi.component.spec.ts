import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10BenifitsOfWifiComponent } from './top-10-benifits-of-wifi.component';

describe('Top10BenifitsOfWifiComponent', () => {
  let component: Top10BenifitsOfWifiComponent;
  let fixture: ComponentFixture<Top10BenifitsOfWifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top10BenifitsOfWifiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top10BenifitsOfWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
