import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class PhotoUploadService {

	// API url
	baseApiUrl = "https://localhost:44356/api/Photos"

	constructor(private http: HttpClient) { }

	postFile(fileToUpload: File): void {
		const formData: FormData = new FormData();
		formData.append('fileKey', fileToUpload, fileToUpload.name);
		 this.http.post(this.baseApiUrl, formData).subscribe(data => {
			console.log(data)
		});
	}

}