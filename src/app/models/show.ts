export class Show {
    ShowId: number;
    ShowDateTime: Date;
    Movie: Movie;
    Theatre: Theatre;
    Auditorium: Auditorium;
    constructor(options: any) {
        this.Movie = options.Movie || {};
        this.Theatre = options.Theatre || {};
        this.Auditorium = options.Auditorium || {};
    }
}

export class Movie {
    MovieId: number;
    MovieName: string;
}

export class Theatre {
    TheatreId: number;
    TheatreName: string;
}

export class Auditorium {
    AuditoriumId: number;
    AuditoriumName: string;
}