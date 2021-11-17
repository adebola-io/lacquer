"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
;
var MotionX = /** @class */ (function () {
    function MotionX() {
    }
    /**
     * Fetches a painting from the server api and returns its address.
     * @param painting
     * The name of the painting to be fetched.
     */
    MotionX.prototype.getPainting = function (painting) {
        fetch("/api/paintings/" + painting)
            .then(function (res) {
            return res.url;
        });
    };
    /**
     * Fetches an object containing information about an artist.
     * @param artist
     * The name of the artist to be fetched.
     */
    MotionX.prototype.getArtist = function (artist) {
        var A = {
            name: '',
            username: '',
            bio: '',
            stars: 0,
            works: 0,
            profilePicURL: ''
        };
        fetch("/api/artists/" + artist)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            A = __assign(__assign({}, A), { name: data.name, username: data.username, bio: data.bio, stars: data.stars, works: data.works, profilePicURL: data.profilePicURL });
        });
        return A;
    };
    ;
    /**
     * Handles login.
     * @param user
     * username to be validated.
     * @param password
     * password to be validated.
     * @returns boolean
     */
    MotionX.prototype.validateUser = function (user, password) {
        return false;
    };
    ;
    /**
     * Returns the collections of a user as an array of objects.
     * @param userID
     * ID of user.
     * @returns array.
     */
    MotionX.prototype.getCollections = function (userID) {
        fetch("/api/users/" + userID)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            return data.collections;
        });
    };
    return MotionX;
}());
var Motion = new MotionX();
exports["default"] = Motion;
