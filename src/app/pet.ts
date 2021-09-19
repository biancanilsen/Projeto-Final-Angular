import { Photo } from "./photo";

export class Pet {
    Id: number = 0;
    Publication_date: number = 0; 
    Name: string = ""; // nome do pet
    Animal: string = ""; // tipo do animal
    Breed: string = ""; // raça do animal
    Age_years: number = 0; // idade
    Age_months: number = 0;
    Size: string = ""; // porte, pequeno meido grande
    Adopted: boolean = false; 
    Old_owner_id: string = "";
    New_owner_id: string = "";
    Photo: Photo[] = []; // baixar ft para colocar
}
