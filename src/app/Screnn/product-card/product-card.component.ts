import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  {

  //Use the ! non-null assertion operator:
  @Input() product!: { title: string, subtitle: string, description: string, imageUrl: string };



}
