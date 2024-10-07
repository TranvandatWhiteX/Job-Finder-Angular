import {Component, OnInit} from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-client-homepage',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule
  ],
  templateUrl: './client-homepage.component.html',
  styleUrl: './client-homepage.component.scss'
})
export class ClientHomepageComponent implements OnInit {
  countries: any[] | undefined;
  jobTypes: any[] | undefined;
  selectedCountry: string | undefined;
  selectedJobType: string | undefined;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchText: [''],
      selectedCity: [''],
      selectedJobType: ['']
    })
  }

  ngOnInit() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];
    this.jobTypes = [
      {name: 'Công nghệ thông tin', code: 'CNTT'},
      {name: 'Marketing', code: 'MAR'},
      {name: 'Logistic', code: 'LOG'}
    ]
  }

  searchJob() {
    console.log(this.searchForm.value);
  }
}
