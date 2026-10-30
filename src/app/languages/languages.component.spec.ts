import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguagesComponent } from './languages.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { LanguagesService } from '../services/languages-service/languages.service';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;
  let service: LanguagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagesComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(LanguagesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get languages documents from Firestore', () => {
    expect(service.getLanguages()).not.toBeNull();
  });

});
