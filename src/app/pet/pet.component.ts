import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoUploadComponent } from '../photo-upload/photo-upload.component';
import { PetService } from '../services/pet.service';
import { PhotoUploadService } from '../services/photo-upload.service';
import { UserService } from '../services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  constructor(
    public petService: PetService,
    public userService: UserService,
    private routerService: Router,
    private photoUploadService: PhotoUploadService,
    private bsModalRef: BsModalRef,
    private modalService: BsModalService
  ) {}
  modalRef?: BsModalRef;

  
  ngOnInit(): void {
    this.userService.getLogged();
  }
  onSubmit(form: any, template: TemplateRef<any>) {
    this.petService.formData.current_owner_id = this.userService.logged.Id;
    this.postPet();
    this.modalRef = this.modalService.show(template);
  }
  update() {
    this.petService.updatePet(this.petService.formData);
  }

  getPet() {
    this.petService.getPet(this.petService.formData.id);
  }
  postPet() {
    this.petService.postPet();
  }

  fileToUpload: any = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  
}
