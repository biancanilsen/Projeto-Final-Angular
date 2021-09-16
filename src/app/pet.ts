import { Photo } from "./photo";

export class Pet {
    Id: number = 0;
    Publication_date: number = 0;
    Name: string = "";
    Animal: string = "";
    Breed: string = "";
    Age: number = 0;
    Size: string = "";
    Adopted: boolean = false;
    Old_owner_id: string = "";
    New_owner_id: string = "";
    Photo: Photo[] = [];
}
