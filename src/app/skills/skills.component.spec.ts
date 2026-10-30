import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { SkillsService } from '../services/skills-service/skills.service';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let service: SkillsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(SkillsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get skills documents from Firestore', () => {
    expect(service.getSkills()).not.toBeNull();
  });

});
