import { Pet } from "./pet";

export class User {
    Id: number = 0;
    CPF : string  = '';
    Name : string = '';
    Surname: string = '';
    Email : string= '';
    Phone: string = '';
    District: string = "" 
    Street: string = "";
    House_number: string = '';
    CEP: string = '';  
    BirthDate: Date = new Date();
    Password: string = '';
    Adopted: boolean = false;
    Donated: boolean = false;
    pets: Pet[] = [];
}
