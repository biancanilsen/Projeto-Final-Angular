import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class PhotoUploadService {

	// API url
	baseApiUrl = "https://localhost:44356/api/Photos"

	constructor(private http: HttpClient) { }

	
	
	postFile(fileToUpload: File): void {
		debugger	
		const formData: FormData = new FormData();
		formData.append('fileKey', fileToUpload, fileToUpload.name);
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type': 'application/json'})
		  }
		 this.http.post(this.baseApiUrl, formData, httpOptions).subscribe(data => {
			console.log(data)
		});
	}

}