import { User } from './user';
import { Photo } from "./photo";

export class Pet {
    id: number = 0;
    publication_date: Date = new Date(); 
    name: string = ""; // nome do pet
    animal: string = ""; // tipo do animal
    breed: string = ""; // raça do animal
    age_years: number = 0; // idade
    age_months: number = 0;
    size: string = ""; // porte, pequeno meido grande
    adopted: boolean = false; 
    current_owner_id: number = 0;
    photos: Photo[] = []; // baixar ft para colocar
    description: string = "";
}
