import {Component, OnInit} from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SkeletonModule} from "primeng/skeleton";
import {CarouselModule} from "primeng/carousel";
import {PostComponent} from "../../shared/components/post/post.component";
import {Post} from "../../shared/models/post.model";
import {Company} from "../../shared/models/company.model";

@Component({
  selector: 'app-client-homepage',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule,
    CarouselModule,
    PostComponent
  ],
  templateUrl: './client-homepage.component.html',
  styleUrl: './client-homepage.component.scss'
})
export class ClientHomepageComponent implements OnInit {
  countries: any[] | undefined;
  jobTypes: any[] | undefined;
  searchForm: FormGroup;
  posts: Post[] = [];
  companies: Company[] = [];
  responsiveOptions: any[] | undefined;
  topJobTypes: any[] = [];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchText: [''],
      selectedCity: [''],
      selectedJobType: ['']
    })
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    this.companies = [
      {name: "FPT Software", avatar: "", id: 1},
      {name: "FPT Software", avatar: "", id: 1},
      {name: "FPT Software", avatar: "", id: 1},
      {name: "FPT Software", avatar: "", id: 1},
      {name: "FPT Software", avatar: "", id: 1},
      {name: "FPT Software", avatar: "", id: 1},
    ]
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
    ];
    this.topJobTypes = [
      {name: "Kinh doanh / Bán hàng", amount: 23456},
      {name: "IT phần mềm", amount: 254632},
      {name: "Hành chính / Văn phòng", amount: 3652},
      {name: "Tư vấn", amount: 4896},
      {name: "Giáo dục / Đào tạo", amount: 5236},
      {name: "Marketing / Truyền thông", amount: 7905},
      {name: "Vận tải / Kho vận", amount: 4563},
      {name: "Kế toán / Kiểm toán", amount: 3574}
    ];
    this.posts = [
      {
        id: 1,
        name: "Senior Java",
        companyName: "FPT Software",
        location: "Hà Nội",
        rangeSalary: "Thỏa thuận"
      },
      {
        id: 1,
        name: "Senior Java",
        companyName: "FPT Software",
        location: "Hà Nội",
        rangeSalary: "Thỏa thuận"
      },
      {
        id: 1,
        name: "Senior Java",
        companyName: "FPT Software",
        location: "Hà Nội",
        rangeSalary: "Thỏa thuận"
      },
      {
        id: 1,
        name: "Senior Java",
        companyName: "FPT Software",
        location: "Hà Nội",
        rangeSalary: "Thỏa thuận"
      },
      {
        id: 1,
        name: "Senior Java",
        companyName: "FPT Software",
        location: "Hà Nội",
        rangeSalary: "Thỏa thuận"
      },
      {
        id: 1,
        name: "Senior Java",
        companyName: "FPT Software",
        location: "Hà Nội",
        rangeSalary: "Thỏa thuận"
      },{
        id: 1,
        name: "Senior Java",
        companyName: "FPT Software",
        location: "Hà Nội",
        rangeSalary: "Thỏa thuận"
      },
      {
        id: 1,
        name: "Senior Java",
        companyName: "FPT Software",
        location: "Hà Nội",
        rangeSalary: "Thỏa thuận"
      }
    ]
  }

  searchJob() {
    console.log(this.searchForm.value);
  }
}
