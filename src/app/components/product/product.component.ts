import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input()
  categories : Category[] = [];

  @Input()
  product ?: Product;

  @Output()
  saveEmitter = new EventEmitter();

  formGroupProduct : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupProduct = this.formBuilder.group({
      id : [''],
      name : [''],
      description : [''],
      category : [''],
      price : [''],
      newProduct : [''],
      promotion : ['']
    })
  }

  save() {
    this.saveEmitter.emit(true);
  }

  cancel() {
    this.saveEmitter.emit(false);
  }

  selectedCategory(category1: Category, category2: Category) {
    return category1 && category2 ? category1.id === category2.id : false;
  }

}
