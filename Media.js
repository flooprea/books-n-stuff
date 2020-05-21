class Media {
    constructor(title) {
        this._title = title;
        this._ratings  = [];
        this._isCheckedOut = false;
    }

    get title(){
        return this._title;
    }

    get ratings(){
        return this._ratings;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    set isCheckedOut(arg){
        this._isCheckedOut = arg;
    }

     toggleCheckOutStatus(){
        if(this._isCheckedOut === true){
            return false;
        }else{
            return true;
        }
    }
    
    getAverageRating(){
        const reducer = (acc, curVal) => acc + curVal;
        return this._ratings.reduce(reducer) / this._ratings.length;
    }

    addRating(rating){
        this._ratings.push(rating);
    }

    
}