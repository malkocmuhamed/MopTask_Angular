import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagequestionsComponent } from './homepagequestions.component';

describe('HomepagequestionsComponent', () => {
  let component: HomepagequestionsComponent;
  let fixture: ComponentFixture<HomepagequestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagequestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagequestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
