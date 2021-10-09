import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef,
  private modalService: BsModalService) { }

  modalRef?: BsModalRef;

  ngOnInit(): void {
  }

  openModel(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
}
