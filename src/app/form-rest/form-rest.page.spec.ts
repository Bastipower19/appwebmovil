import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormRestPage } from './form-rest.page';

describe('FormRestPage', () => {
  let component: FormRestPage;
  let fixture: ComponentFixture<FormRestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormRestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
