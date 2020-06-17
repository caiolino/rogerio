import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFeedComponent } from './adm-feed.component';

describe('AdmFeedComponent', () => {
  let component: AdmFeedComponent;
  let fixture: ComponentFixture<AdmFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
