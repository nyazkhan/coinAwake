import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'filterByCategory'
})
export class FilterProductByCategory implements PipeTransform{
  transform(products, category: string) {
    if (category === 'all'){
      return products;
    }
    else {
      return products.filter(product => product.type.includes(category));
    }
  }

}
