import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit {

  dataList = [];
  page: number;
  pageCount: number;
  recordCount: number;
  colunmNames = ['STT', 'Họ tên', 'Công Ty', 'Giới tính', 'SDT', 'Tình Trạng', 'Người phụ trách', 'Nhóm Phụ Trách'];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProspectList(0, 10).subscribe(data => {
      this.dataList = data.result.data;
      this.page = data.result.page;
      this.pageCount = data.result.pageCount;
      this.recordCount = data.result.recordCount;

      console.log(this.dataList);
    });
  }

}
