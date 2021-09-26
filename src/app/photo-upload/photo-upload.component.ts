import { Component, OnInit } from '@angular/core';
import { PhotoUploadService } from '../services/photo-upload.service';

@Component({
	selector: 'app-photo-upload',
	templateUrl: './photo-upload.component.html',
	styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

	// Variable to store shortLink from api response
	shortLink: string = "";
	loading: boolean = false; // Flag variable
	file: File = {} as File; // Variable to store file

	// Inject service
	constructor(private photoUploadService: PhotoUploadService) { }

	ngOnInit(): void {
	}

	// On file Select
	onChange(event: any) {
		this.file = event.target.files[0];
	}

	// OnClick of button Upload
	onUpload() {
		this.loading = !this.loading;
		console.log(this.file);
		this.photoUploadService.upload(this.file).subscribe(
			(event: any) => {
				if (typeof (event) === 'object') {

					// Short link via api response
					this.shortLink = event.link;

					this.loading = false; // Flag variable
				}
			}
		);
	}
}
