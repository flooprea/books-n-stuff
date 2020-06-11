class Media {
    constructor(title, type) {
        this._type = type;
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    get type() {
        return this._type;
    }

    get title() {
        return this._title;
    }

    get ratings() {
        return this._ratings;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    set isCheckedOut(arg) {
        this._isCheckedOut = arg;
    }

    toggleCheckOutStatus() {
        //testing babel
        let biscuits = 'this is ES6 sintax';
        const mti  = 'this is ES6 sintax';

        if (this._isCheckedOut === true) {
            this._isCheckedOut = false;
        } else if (this._isCheckedOut === false){
            this._isCheckedOut = true;
        }
    }

    getAverageRating()  {
        const reducer = (acc, curVal) => acc + curVal;
        return Math.round((this._ratings.reduce(reducer) / this._ratings.length) * 10) / 10;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }


}