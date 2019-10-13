import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPortFolioComponent } from './new-port-folio.component';

describe('NewPortFolioComponent', () => {
  let component: NewPortFolioComponent;
  let fixture: ComponentFixture<NewPortFolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPortFolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPortFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
