export class Comment {

    postId: string;
    id: string;
    name: string;
    email: string;
    body: string;
    


    constructor(post) {
        this.postId = post.postId;
        this.id = post.id;
        this.name = post.name;
        this.email = post.email
        this.body = post.body;
    }
}