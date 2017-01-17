import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let articles = [
            { title: 'News in Africa', link: 'http://africa.io', category: 'news', votes: 3 },
            { title: 'News', link: 'http://africa.io', category: 'news', votes: 2 },
            { title: ' Africa', link: 'http://africa.io', category: 'newss', votes: 5 }

        ];
        return { articles };
    }
}