import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../core/authentication/auth.service';
import { By } from '@angular/platform-browser';
import { MockAuthService } from '../../shared/mocks/mock-auth.service';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DebugElement } from '@angular/core'; 

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

  it('should have disabled submit button by default', ()=>{  

    fixture.whenStable().then(() => {
      fixture.detectChanges(); // need another change detection pass after initialization
      let submitEL: DebugElement = fixture.debugElement.query(By.css('button[type=submit]'));
      expect(submitEL.nativeElement.disabled).toBe(true);
    });
  });
  
  it('should show invalid email tip', async(() => {

  fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('#email'));
      let inputElement = input.nativeElement;
       //set input value
       inputElement.value = 'test value';
       inputElement.dispatchEvent(new Event('input'));     
       expect(component.userRegistration.email).toBe('test value');
       var validationError = fixture.debugElement.query(By.css('.text-danger'));
       expect(validationError).toBeTruthy();
    }); 
  })); 
});
