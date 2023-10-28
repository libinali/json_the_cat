const request = require('request');
const breed = process.argv[2];

const apiEndPoint = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

const breedFetcher = function() {
  request(apiEndPoint, (error, response, body) => {
   
    if (error) {
      console.log('error:', error);
    }

    if (response.statusCode === 200) {
      const data = JSON.parse(body);

      if (data.length === 0) {
        console.log('Requested breed is not found. Please try again.');
      }

      for (const cat of data) {
        const description = cat.description;
        console.log(description);
      }
    }
  });
};

breedFetcher();

