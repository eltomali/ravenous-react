// Check Key
// if(process.env.apiKey === undefined){
//   console.error('No Api Key\nAdd `apiKey=<KEY>` in `.env` file');
//   alert('No Api Key!\nAdd `apiKey=<KEY>` in `.env` file');
// }


export const Yelp = {
  search(term, location, sortBy) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    
    const httpOptions = {
      headers: {Authorization: `Bearer ${process.env.apiKey}`}
    }

    return fetch(url, httpOptions)
    .then( (response)=> {
      return response.json;
    })
    .then( (jsonResponse) => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map( (business) => { return {
          id: business.id, 
          imageSrc: business.image_url,
          name: business.name, 
          address1: business.location.address1, 
          address2: business.location.address2,
          city: business.location.city, 
          postnr: business.location.zip_code, 
          category: business.categories, 
          rating: business.rating, 
          reviewCount: business.review_count
        }
        });
      }
    });
  }
} 