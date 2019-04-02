import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { NgxSpinnerModule } from 'ngx-spinner'; 
import { ConfigService } from '../../shared/config.service';

describe('LoginComponent', () => {
  let el: HTMLElement;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService],
      imports: [FormsModule, HttpClientTestingModule, NgxSpinnerModule],
      declarations: [LoginComponent]         
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have title "Login"', () => {
    expect(component.title).toEqual('Login');
  });

  it('should call the login method', () => {
    spyOn(component, 'login');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.login).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
