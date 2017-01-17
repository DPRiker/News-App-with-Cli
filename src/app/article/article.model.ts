export class Article {
    title: string;
    link: string;
    votes: number;
    date: Date;
    category:string;
    

    constructor(title: string, link: string, category:string, votes?: number ) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.date = new Date();
        this.category = category;
    }
    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}
