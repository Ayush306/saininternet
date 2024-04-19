import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectOnWhatsappComponent } from './connect-on-whatsapp.component';

describe('ConnectOnWhatsappComponent', () => {
  let component: ConnectOnWhatsappComponent;
  let fixture: ComponentFixture<ConnectOnWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectOnWhatsappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectOnWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
