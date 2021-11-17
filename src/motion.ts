interface ArtistObject {
    /**
     * Full name of the artist.
     */
    name: string,
    /**
     * Username used by or assigned to the artist.
     */
    username: string,
    /**
     * Info about the artist.
     */
    bio: string,
    /**
     * Number of people who have starred the artist.
     */
    stars: number,
    /**
     * Number of works by the artist.
     */
    works: Array<string>,
    /**
     * Address specifying the location of the artist's profile pic on the server.
     */
    profilePicURL: string,
};
/**
 * Fetches a painting from the server api and returns its address.
 * @param painting
 * The name of the painting to be fetched.
 */
export function fetchPainting (painting: string) {
    fetch(`/api/paintings/${painting}`)
    .then(res=>{
        return res.url
    })
}
/**
 * Fetches an object containing information about an artist.
 * @param artist
 * The name of the artist to be fetched.
 */
export function fetchArtist (artist: string) {
    let A : ArtistObject = {
        name: '',
        username: '',
        bio: '',
        stars: 0,
        works: [],
        profilePicURL: ''
    }
    fetch(`/api/artists/${artist}`)
    .then(res=>res.json())
    .then(data=>{
        A = {
        ...A, 
        name: data.name,
        username: data.username,
        bio: data.bio,
        stars: data.stars,
        works: data.works,
        profilePicURL: data.profilePicURL,
        }         
    })
    return A;
};
/**
 * Handles login.
 * @param user
 * username to be validated.
 * @param password
 * password to be validated.
 * @returns boolean
 */
export function validateUser (user: string, password: string) {
    return false;
};
/**
 * Returns the collections of a user as an array of objects.
 * @param userID
 * ID of user.
 * @returns array.
 */
export function fetchCollections (userID: number) {
    fetch(`/api/users/${userID}`)
    .then(res=>res.json())
    .then(data=>{
        return data;
    })
}
class MotionComponent {
    fetchPainting = fetchPainting;
    fetchCollections = fetchCollections;
    fetchArtist = fetchArtist;
    validateUser = validateUser;
}
var Motion = new MotionComponent();

export default Motion;