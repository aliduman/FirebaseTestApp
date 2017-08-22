import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataListComponent } from './get-data-list.component';

describe('GetDataListComponent', () => {
  let component: GetDataListComponent;
  let fixture: ComponentFixture<GetDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
