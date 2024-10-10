import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacoChinoComponent } from './zodiaco-chino.component';

describe('ZodiacoChinoComponent', () => {
  let component: ZodiacoChinoComponent;
  let fixture: ComponentFixture<ZodiacoChinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZodiacoChinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZodiacoChinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
