import { TestBed } from '@angular/core/testing';
import { EducationService } from './education.service';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

describe('EducationService', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    });
    service = TestBed.inject(EducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get education collection', () => {
    expect(service.getEducation()).not.toBeNull();
  });

});
