import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SomosPage } from './somos.page';

describe('SomosPage', () => {
  let component: SomosPage;
  let fixture: ComponentFixture<SomosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
