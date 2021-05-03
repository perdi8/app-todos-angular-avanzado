import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDetailPageComponent } from './todos-detail-page.component';

describe('TodosDetailPageComponent', () => {
  let component: TodosDetailPageComponent;
  let fixture: ComponentFixture<TodosDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
