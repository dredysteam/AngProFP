import { Component, OnInit,EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Meal } from 'src/health/shared/services/meals/meals.service';
import { FormArray,FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  @Output()
  create: EventEmitter<Meal> = new EventEmitter<Meal>() ;

  form = this.formBuilder.group({
      name: ['', Validators.required],
      ingredients:this.formBuilder.array([''])
    })
  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
    
  }

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }    
  }

  get required() {
    return (this.form.get('name').hasError('required') && this.form.get('name').touched);
  }

}
