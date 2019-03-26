import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSpinnerModule } from 'ngx-spinner'; 
import { AuthService } from '../../core/authentication/auth.service';
import { MockAuthService } from '../../shared/mocks/mock-auth.service';
import { TopSecretService } from '../top-secret.service';
import { MockTopSecretService } from '../../shared/mocks/mock-top-secret.service';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      imports: [NgxSpinnerModule],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: TopSecretService, useClass: MockTopSecretService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
