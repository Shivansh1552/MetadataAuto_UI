import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConncetionItemComponent } from './conncetion-item.component';

describe('ConncetionItemComponent', () => {
  let component: ConncetionItemComponent;
  let fixture: ComponentFixture<ConncetionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConncetionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConncetionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
