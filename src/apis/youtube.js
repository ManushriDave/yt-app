import axios from 'axios';

const KEY =  "AIzaSyBVrrJgVeZPLjsNDWvL1OJh1NSM5j8ArOo";

export default axios.create ({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});