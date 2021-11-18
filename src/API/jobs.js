import axios from 'axios';

export default axios.create({
    baseURL : 'https://jobs-api.squareboat.info/api/v1'
});