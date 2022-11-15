import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { TestCommonImports } from '../../../shared/helpers/test.helper';

import { ItemAddEditComponent } from './item-add-edit.component';
import { ItemsService } from '../services/items.service';

describe('ItemAddEditComponent', () => {
  let component: ItemAddEditComponent;
  let fixture: ComponentFixture<ItemAddEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAddEditComponent ],
      imports: [
        ...TestCommonImports,
      ],
      providers : [
        HttpClient,
        ItemsService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
