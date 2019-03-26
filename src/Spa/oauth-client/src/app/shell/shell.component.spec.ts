import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from '../core/authentication/auth.service';
import { MockAuthService } from '../shared/mocks/mock-auth.service';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: AuthService, useClass: MockAuthService}
      ],
      declarations: [ HeaderComponent, ShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
