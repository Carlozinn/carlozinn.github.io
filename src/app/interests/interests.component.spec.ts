import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestsComponent } from './interests.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { InterestsService } from '../services/interests-service/interests.service';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;
  let service: InterestsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterestsComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(InterestsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get interests documents from Firestore', () => {
    expect(service.getInterests()).not.toBeNull();
  });

});
