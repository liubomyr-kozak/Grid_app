import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDynamicComponentComponent } from './grid-dynamic-component.component';

describe('GridDynamicComponentComponent', () => {
  let component: GridDynamicComponentComponent;
  let fixture: ComponentFixture<GridDynamicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDynamicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
