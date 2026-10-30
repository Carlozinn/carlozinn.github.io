import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificatesComponent } from './certificates.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { CertificatesService } from '../services/certificates-service/certificates.service';

describe('CertificatesComponent', () => {
  let component: CertificatesComponent;
  let fixture: ComponentFixture<CertificatesComponent>;
  let service: CertificatesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificatesComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CertificatesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get certificates documents from Firestore', () => {
    expect(service.getCertificates()).not.toBeNull();
  });

});
