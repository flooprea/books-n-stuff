class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runtTime = runTime;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runtTime;
    }
}