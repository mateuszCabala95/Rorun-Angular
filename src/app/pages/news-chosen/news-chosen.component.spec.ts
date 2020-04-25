import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsChosenComponent } from './news-chosen.component';

describe('NewsChosenComponent', () => {
  let component: NewsChosenComponent;
  let fixture: ComponentFixture<NewsChosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsChosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsChosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
