import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeApiListComponent } from './node-api-list.component';

describe('NodeApiListComponent', () => {
  let component: NodeApiListComponent;
  let fixture: ComponentFixture<NodeApiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeApiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
