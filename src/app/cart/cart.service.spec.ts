import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {ReactiveFormsModule} from '@angular/forms';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ReactiveFormsModule
    ]
  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
