import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHotQuestionsComponent } from './homepage-hot-questions.component';

describe('HomepageHotQuestionsComponent', () => {
  let component: HomepageHotQuestionsComponent;
  let fixture: ComponentFixture<HomepageHotQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageHotQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHotQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
