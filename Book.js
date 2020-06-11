class Book extends Media {
    
    constructor(title, type, author, pages){
        super(title, type);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }

    
}