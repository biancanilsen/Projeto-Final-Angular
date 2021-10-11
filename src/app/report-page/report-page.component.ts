import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Pet } from '../domain/pet';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  pet: Pet = new Pet;

  constructor(private bsModalRef: BsModalRef, public petService: PetService, private modalService: BsModalService, private actRoute: ActivatedRoute) {
    this.pet.id = this.actRoute.snapshot.params.id;
  }

  modalRef?: BsModalRef;

  ngOnInit(): void {
    this.petService.getPet(this.pet.id);
    this.petService.getAllPets();
  }

  openModel(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
