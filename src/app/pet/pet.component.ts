import { HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../domain/photo';
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
  ) { }

  modalRef?: BsModalRef;
  photoToUpload: Photo = new Photo;

  ngOnInit(): void {
    this.userService.getLogged();
  }

  onSubmit(form: any, template: TemplateRef<any>) {
    this.petService.formData.current_owner_id = this.userService.logged.Id;
    this.postPet();
    this.uploadFileToActivity();
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

  handleFileInput(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let files: FileList | null = element.files;
    this.photoToUpload.PhotoPath = files?.item(0)?.name as string;
    this.photoToUpload.PhotoContent = files?.item(0) as File;
    this.petService.formData.photos.push(this.photoToUpload)
    debugger
  }

  uploadFileToActivity() {
    this.photoUploadService.postFile(this.photoToUpload);
  }
}
