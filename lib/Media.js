'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Media = function () {
    function Media(title, type) {
        _classCallCheck(this, Media);

        this._type = type;
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    _createClass(Media, [{
        key: 'toggleCheckOutStatus',
        value: function toggleCheckOutStatus() {
            //testing babel
            var biscuits = 'this is ES6 sintax';
            var mti = 'this is ES6 sintax';

            if (this._isCheckedOut === true) {
                this._isCheckedOut = false;
            } else if (this._isCheckedOut === false) {
                this._isCheckedOut = true;
            }
        }
    }, {
        key: 'getAverageRating',
        value: function getAverageRating() {
            var reducer = function reducer(acc, curVal) {
                return acc + curVal;
            };
            return Math.round(this._ratings.reduce(reducer) / this._ratings.length * 10) / 10;
        }
    }, {
        key: 'addRating',
        value: function addRating(rating) {
            this._ratings.push(rating);
        }
    }, {
        key: 'type',
        get: function get() {
            return this._type;
        }
    }, {
        key: 'title',
        get: function get() {
            return this._title;
        }
    }, {
        key: 'ratings',
        get: function get() {
            return this._ratings;
        }
    }, {
        key: 'isCheckedOut',
        get: function get() {
            return this._isCheckedOut;
        },
        set: function set(arg) {
            this._isCheckedOut = arg;
        }
    }]);

    return Media;
}();