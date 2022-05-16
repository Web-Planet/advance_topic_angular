import {Injectable} from '@angular/core';
import {Billboard} from './billboard';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {
  billboardData: Billboard[] = [];

  constructor() {
  }

  getListArtists() {
    this.billboardData = [
      new Billboard(1, 'Wait For U', 'Future ft Drake & Terms'),
      new Billboard(2, 'As It Was', 'Harry Styles'),
      new Billboard(3, 'First Class', 'Jack Harlow'),
      new Billboard(4, 'Puffin On Zootiez', 'Future'),
      new Billboard(5, 'Heat Waves', 'Glass Animals')
    ];

    return this.billboardData;
  }
}
