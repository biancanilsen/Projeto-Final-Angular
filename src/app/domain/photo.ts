export class Photo {
    Photo_Id: number = 0;
    Publication_date: Date = new Date();
    PhotoPath: string = "";
    PhotoContent : File = {} as File;
}
