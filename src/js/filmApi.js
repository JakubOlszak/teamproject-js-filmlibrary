import axios from 'axios';

// FIRST METHOD
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/popular';
axios.defaults.params = {
  api_key: '95f474a01cc4252905d63c7d958d5749',
  language: 'en-US',
  page: 1,
};

// FIRST METHOD
export const axiosFirstFetchFn = async () => {
  try {
    const response = await axios.get();
    // Here I implemented response async/await fn, check what we gonna recive and then work with it
    return console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// SECOND METHOD
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 95f474a01cc4252905d63c7d958d5749',
  },
};

export const axiosSecondFetchFn = async () => {
  try {
    const response = await axios.request(options);
    const data = await response.data;
    return console.log(data);
  } catch (error) {
    console.log(error);
  }
};
