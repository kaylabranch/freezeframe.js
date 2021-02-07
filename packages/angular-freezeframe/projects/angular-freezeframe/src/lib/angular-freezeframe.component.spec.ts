import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFreezeframeComponent } from './angular-freezeframe.component';

const src = 'http://localhost:8080/foo.gif'

describe('AngularFreezeframeComponent', () => {
  let component: AngularFreezeframeComponent;
  let fixture: ComponentFixture<AngularFreezeframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFreezeframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFreezeframeComponent);
    component = fixture.componentInstance;
    component.src = src
    fixture.detectChanges();
  });

  it('renders image when url is passed into src prop', () => {
    expect(component).toBeTruthy();
    const container = fixture.nativeElement.firstChild
    const img = container.querySelector('img')
    expect(container).toHaveClass('angular-freezeframe')
    expect(img.src).toBe(src)
  });
});
