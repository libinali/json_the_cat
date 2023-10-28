const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  
  const apiEndPoint = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  
  request(apiEndPoint, (error, response, body) => {
   
    if (error) {
      callback(error, null);
      return;
    }

    const [data] = JSON.parse(body);

    if (!data) {
      callback(null, 'Requested breed is not found. Please try again.');
      return;
    }
      
    callback(null, data.description);
  });
};


module.exports = { fetchBreedDescription };

