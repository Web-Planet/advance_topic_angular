import { Component, OnInit } from '@angular/core';
import {BillboardService} from '../billboard.service';
import {Billboard} from '../billboard';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {
  billboardData: Billboard[] = [];

  constructor(private billboard: BillboardService) { }

  ngOnInit(): void {
  }

  getArtists() {
    this.billboardData = this.billboard.getListArtists();
  }
}
