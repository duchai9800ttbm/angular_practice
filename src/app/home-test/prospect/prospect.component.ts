import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit, OnChanges {

  dataList = [];
  page: number;
  pageCount: number;
  total: number;
  pageIndex = 0;
  p = 1;
  colunmNames = ['STT', 'Họ tên', 'Công Ty', 'Giới tính', 'SDT', 'Tình Trạng', 'Người phụ trách', 'Nhóm Phụ Trách'];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProspectList(0, 10).subscribe(data => {
      this.dataList = data.result.data;
      this.page = data.result.page;
      this.pageCount = data.result.pageCount;
      this.total = data.result.recordCount;

      console.log(data);
    });
  }

  ngOnChanges() {
  }

  pageChange(event) {
    this.p = event;
    this.data.getProspectList(this.p - 1, 10).subscribe(data => {
      this.dataList = data.result.data;
      this.page = data.result.page;
      this.pageCount = data.result.pageCount;
      this.total = data.result.recordCount;
    });
    console.log(event);
  }
}
