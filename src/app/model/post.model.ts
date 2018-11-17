import { User } from "./user.model";

export class Post {

    id: string;
    body: string;
    title: string;
    userId: string;
    user: User;

    capa: string;

    constructor(post) {
        this.id = post.id;
        this.body = post.body;
        this.title = post.title;
        this.userId= post.userId;
        this.capa = "https://picsum.photos/1110/492/?image=3" + post.id;
    }

    setUser(userPost: User) {
        this.user = userPost;
    }
}