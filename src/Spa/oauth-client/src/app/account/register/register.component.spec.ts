import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../core/authentication/auth.service';
import { MockAuthService } from '../../shared/mocks/mock-auth.service';
import { FormsModule }   from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner'; 

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,NgxSpinnerModule],
      declarations: [RegisterComponent],
      providers: [
        {provide: AuthService, useClass: MockAuthService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
