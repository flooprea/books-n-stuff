class Movie extends Media {
    constructor(title, type,  director, runTime) {
        super(title, type);
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