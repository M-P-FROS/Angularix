import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFigurineComponent } from './list-figurine.component';

describe('ListFigurineComponent', () => {
  let component: ListFigurineComponent;
  let fixture: ComponentFixture<ListFigurineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFigurineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFigurineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
