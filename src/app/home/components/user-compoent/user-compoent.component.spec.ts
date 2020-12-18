import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompoentComponent } from './user-compoent.component';

describe('UserCompoentComponent', () => {
  let component: UserCompoentComponent;
  let fixture: ComponentFixture<UserCompoentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCompoentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
