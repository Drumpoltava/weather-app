import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFavoritesComponent } from './cards-favorites.component';

describe('CardsFavoritesComponent', () => {
  let component: CardsFavoritesComponent;
  let fixture: ComponentFixture<CardsFavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsFavoritesComponent]
    });
    fixture = TestBed.createComponent(CardsFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
