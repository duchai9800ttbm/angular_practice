import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { QuestionBase } from './dynamic-input/question-base';
import { DropdownQuestion } from './dynamic-input/question-dropdown';
import { TextboxQuestion } from './dynamic-input/question-textbox';
import { QuestionControlService } from './dynamic-input/question-control.service';
import { FormGroup } from '@angular/forms';
import { RadioQuestion } from './dynamic-input/question-radio';
import { TextareaQuestion } from './dynamic-input/question-textarea';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService],
  animations: [
    trigger('toggle', [
      state('hide', style({
        height: '0px',
        visibility: 'hidden'
      })),
      state('show', style({
        height: '*',
        visibility: 'visible'
      })),
      transition('hide <=> show', [ animate('0.5s') ])
    ]),
    trigger('toggleIcon', [
      state('hide', style({
        transform: 'rotate(-90deg)'
      })),
      state('show', style({
        transform: 'rotate(0)'
      })),
      transition('hide <=> show', [ animate('0.3s') ])
    ])
  ]
})
export class DynamicFormComponent implements OnInit, AfterViewInit, AfterViewChecked {

  show = 1;
  show1 = 1;
  show2 = 1;
  form: FormGroup;
  questions: QuestionBase<any>[] = [
    new DropdownQuestion({
      key: 'title',
      label: 'Nhân xưng',
      pair: {value: 'value',  text: 'text'},
      value: 'default',
      api: 'http://115.79.35.119:6868/mhb-crm//list/prospect-names',
      order: 1
    }),

    new TextboxQuestion({
      key: 'name',
      label: 'Họ và tên',
      type: 'text',
      required: true,
      order: 2
    }),

    new DropdownQuestion({
      key: 'rate',
      label: 'đánh giá',
      pair: {value: 'value',  text: 'text'},
      value: 'default',
      order: 3,
      api: 'http://115.79.35.119:6868/mhb-crm//list/prospect-evaluations',
      editor: true
    }),

    new TextboxQuestion({
      key: 'company',
      label: 'Tên công ty',
      type: 'text',
      order: 4
    }),

    new DropdownQuestion({
      key: 'customerResource',
      label: 'Nguồn tiềm năng',
      pair: {value: 'id',  text: 'name'},
      value: 'default',
      order: 5,
      editor: true,
      api: 'http://115.79.35.119:6868/mhb-crm//list/customer-resources'
    }),

    new RadioQuestion({
      key: 'gender',
      label: 'Giới tính',
      options: [
        {value: 'male', name: 'Nam'},
        {value: 'female', name: 'Nữ'}],
      order: 6,
      name: 'gender'
    }),

    new TextboxQuestion({
      key: 'dob',
      label: 'Ngày sinh',
      type: 'date',
      order: 7
    }),

    new DropdownQuestion({
      key: 'lunarBirthday',
      label: 'Ngày sinh âm',
      // options: [
      //   {key: 'default',  value: '--Lựa chọn--'},
      // ],
      // value: 'default',
      order: 8,
    }),

    new DropdownQuestion({
      key: 'handler',
      label: 'Cần xử lý bởi',
      pair: {value: 'value',  text: 'text'},
      value: 'default',
      order: 9,
      editor: true,
      api: 'http://115.79.35.119:6868/mhb-crm//list/prospect-handler'
    }),

    new DropdownQuestion({
      key: 'employeeGroup',
      label: 'Nhóm phụ trách',
      pair: {value: 'id',  text: 'name'},
      value: 'default',
      order: 10,
      api: `http://115.79.35.119:6868/mhb-crm//employee/${this.objectId}/employee-groups`
    }),

    new DropdownQuestion({
      key: 'employee',
      label: 'Người phụ trách',
      pair: {value: 'id',  text: 'name'},
      value: 'default',
      order: 11,
      api: `http://115.79.35.119:6868/mhb-crm//employee/${this.objectId}/employees/assignable`
    }),

    new TextboxQuestion({
      key: 'retails',
      label: 'Retail',
      type: 'search',
      order: 12,
      placeholder: 'Tìm theo tên'
    }),

    new TextboxQuestion({
      key: 'models',
      label: 'Model',
      type: 'search',
      order: 13,
      placeholder: 'Tìm theo tên'
    }),

    new TextboxQuestion({
      key: 'dabs',
      label: 'D&B',
      type: 'search',
      order: 14,
      placeholder: 'Tìm theo tên'
    }),

    new DropdownQuestion({
      key: 'approachChannels',
      label: 'Kênh tiếp cận',
      options: [
        {key: 'default',  value: '--Lựa chọn--'},
      ],
      value: 'default',
      order: 15,
      editor: true
    }),

    new TextboxQuestion({
      key: 'cellPhone',
      label: 'Điện thoại chính',
      type: 'tel',
      order: 16
    }),

    new TextboxQuestion({
      key: 'phone',
      label: 'Điện thoại di động',
      type: 'tel',
      order: 17
    }),

    new TextboxQuestion({
      key: 'email',
      label: 'email',
      type: 'email',
      order: 18
    }),

    new TextboxQuestion({
      key: 'socialLink',
      label: 'Social link',
      type: 'url',
      order: 19
    }),

    new TextboxQuestion({
      key: 'revenue',
      label: 'Doanh thu hằng năm',
      type: 'text',
      order: 20,
      directive: true,
      value: '0 VNĐ'
    }),

    new DropdownQuestion({
      key: 'potentialStatus',
      label: 'Tình trạng',
      pair: {value: 'value',  text: 'text'},
      value: 'default',
      order: 21,
      api: 'http://115.79.35.119:6868/mhb-crm//list/prospect-status'
    }),

    new TextboxQuestion({
      key: 'date',
      label: 'Ngày phát sinh tiềm năng',
      type: 'date',
      order: 22
    }),

    new TextboxQuestion({
      key: 'promotionCare',
      label: 'CTKM quan tâm',
      type: 'text',
      order: 23
    }),

    new TextboxQuestion({
      key: 'adsID',
      label: 'Ads ID',
      type: 'text',
      order: 24
    }),

    new TextboxQuestion({
      key: 'askShowroomAddress',
      label: 'Hỏi địa chỉ showroom',
      type: 'checkbox',
      order: 25
    }),

    new TextboxQuestion({
      key: 'approached',
      label: 'Đã tiếp cận',
      type: 'checkbox',
      order: 26
    }),

    new TextboxQuestion({
      key: 'opportunities',
      label: 'Cơ hội bán hàng',
      type: 'checkbox',
      order: 26
    }),

    new TextareaQuestion({
      key: 'result',
      label: 'Kết quả',
    })
  ];
  address: QuestionBase<any>[] = [
    new TextboxQuestion({
      key: 'address',
      label: 'Địa chỉ',
      type: 'text'
    }),

    new DropdownQuestion({
      key: 'country',
      label: 'Quốc gia',
      options: [
        {key: 'default', value: '--Lựa chọn--'},
        {key: '1', value: 'việt nam'}
      ],
      value: 'default',
      order: 1
    }),

    new DropdownQuestion({
      key: 'city',
      label: 'Tỉnh/Thành phố',
      options: [
        {key: 'default', value: '--Lựa chọn--'},
        {key: '1', value: 'đà nẵng'}
      ],
      value: 'default',
      order: 1
    }),

    new DropdownQuestion({
      key: 'district',
      label: 'Quận/Huyện',
      options: [
        {key: 'default', value: '--Lựa chọn--'},
        {key: '1', value: 'Hải châu'}
      ],
      value: 'default',
      order: 1
    }),
  ];
  descriptor: QuestionBase<any>[] = [
    new TextareaQuestion({
      key: 'result',
      label: 'Kết quả',
      span: 2
    })
  ];
  obj = {
    address: '',
    adsID: '',
    approachChannels: 'default',
    approached: '',
    askShowroomAddress: '',
    cellPhone: '',
    city: 'default',
    company: '',
    country: 'default',
    customerResource: 'default',
    dabs: '',
    date: '',
    district: 'default',
    dob: '',
    email: '',
    employee: 'default',
    employeeGroup: 'default',
    gender: '',
    handler: 'default',
    lunarBirthday: 'default',
    models: '',
    name: '',
    opportunities: '',
    phone: '',
    potentialStatus: 'default',
    promotionCare: '',
    rate: 'default',
    result: '',
    retails: '',
    socialLink: '',
    title: 'default',
    revenue: '0 VNĐ'
  };
  checker = this.obj;

  @Input() formName: string;
  @Input() dataModel: Observable<any>;

  constructor(private qcs: QuestionControlService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions.concat(this.address, this.descriptor));
    if (this.dataModel) {
      this.dataModel.subscribe(data => {
        const d = data.result;
        // console.log(this.form);
      });
    }
  }

  ngAfterViewInit(): void {

    this.form.setValue(this.obj);

    console.log(this.form);
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  showData() {
    return this.form.value;
  }

  setData(data: Observable<any>) {
    data.subscribe(d => {
      // this.obj = d.result;
      Object.keys(this.obj).filter(key => this.obj[key] = d.result[key]);
      // tslint:disable-next-line: no-string-literal
      this.obj.customerResource = d.result['customerResource']['id'];
      console.log(this.obj);
      this.ngAfterViewInit();
    });
  }

  checkChange(): boolean {
    console.log(this.checker);
    console.log(this.form.value);

    return Object.keys(this.checker).reduce((p, c) => {
      console.log(this.checker[c] === this.form.value[c]);
      if (this.checker[c] !== this.form.value[c]) {
        return 'false';
      }
      return p;
    }, 'true') === 'false';
  }

  private get objectId() {
    return localStorage.getItem('objectId');
  }
}
