import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecComponent } from './list-rec.component';

describe('ListRecComponent', () => {
  let component: ListRecComponent;
  let fixture: ComponentFixture<ListRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
