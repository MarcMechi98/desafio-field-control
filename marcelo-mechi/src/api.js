import axios from 'axios';

const searchRepos = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response.data;

    } catch (err) {
        console.log('ERRO! Algo deu errado!');
        return []
    }

}

export default searchRepos;