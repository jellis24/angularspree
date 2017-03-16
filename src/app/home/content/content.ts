import { Product } from './../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <app-content-header></app-content-header>
    <app-filter-summary></app-filter-summary>
    <app-customize></app-customize>
    <app-product-list [products]='products'></app-product-list>
  `,
//   styleUrls: ['./content-header.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}