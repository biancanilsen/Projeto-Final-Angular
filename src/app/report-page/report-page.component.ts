import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  confirmReport(){
    alert ("O seu reporte foi encaminhado para nossos administradores e será analisado!")
  }
}
