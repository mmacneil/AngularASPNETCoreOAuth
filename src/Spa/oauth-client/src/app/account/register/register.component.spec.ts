import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../core/authentication/auth.service';
import { FormsModule }   from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigService } from '../../shared/config.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,NgxSpinnerModule,HttpClientTestingModule],
      declarations: [RegisterComponent],
      providers: [AuthService,ConfigService]
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
