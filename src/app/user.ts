export class User {
    Id: number = 0;
    CPF : string  = '';
    Name : string = '';
    Surname: string = '';
    Email : string= '';
    Phone: number = 0;
    District: string = "" 
    Road: string = "";
    House_number: number = 0;
    CEP: number = 0;  
    BirthDate: Date = new Date();
    Password: string = '';
    Adopted: boolean = false
    Donated: boolean = false
}
