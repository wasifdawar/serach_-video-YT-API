import axios from 'axios';

const KEY = 'AIzaSyB9Pwil9f5mkZGPlfNN87clLGtqT2LI_GM';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})