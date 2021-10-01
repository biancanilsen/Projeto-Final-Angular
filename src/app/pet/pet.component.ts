import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service';
import { UserService } from '../services/user.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UploadFileService } from '../upload-file/upload-file.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(public petService: PetService, public userService: UserService,
     private routerService: Router, public uploadService: UploadFileService) { }

  ngOnInit(): void {
    this.userService.getLogged();
  }
  onSubmit(form: any){
    this.petService.formData.current_owner = this.userService.logged
    this.postPet();
    this.routerService.navigateByUrl('/pet-confirm')
    
  }
    update(){
      this.petService.updatePet(this.petService.formData);
      
    }
  
    getPet(){
      this.petService.getPet(this.petService.formData);
    }
    postPet(){
      this.petService.postPet();
    }
    
    files: Set<File> = new Set;
  progress = 0;

  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    document.getElementById('customFileLabel')!.innerHTML = fileNames.join(', ');

    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.uploadService.upload(this.files, 'http://localhost:8000/upload')
        .subscribe(response => console.log('Upload Concluído'));
        // .subscribe((event: HttpEvent<Object>) => {
        //   // console.log(event);
        //   if (event.type === HttpEventType.Response) {
        //     console.log('Upload Concluído');
        //   } else if (event.type === HttpEventType.UploadProgress) {
        //     const percentDone = Math.round((event.loaded * 100) / event.total);
        //     // console.log('Progresso', percentDone);
        //     this.progress = percentDone;
        //   }
        // } );
    }
  }
  
}
