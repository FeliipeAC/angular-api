
export class UserLogged {

    id = null;
    name = null;
    username: string;
    email: string;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }
}
