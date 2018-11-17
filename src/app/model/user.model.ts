
export class User {

    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    city: string;
    company: string;


    foto: string;

    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.email= user.email;
        this.phone = user.phone;
        this.website = user.website;
        this.city = user.address.city;
        this.company = user.company.name;
        this.foto = "https://picsum.photos/1110/492/?image=5" + user.id;
    }
}