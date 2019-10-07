// Check Key
if(process.env.REACT_APP_API_KEY === undefined){
  console.error('No Api Key\nAdd `apiKey=<KEY>` in `.env` file');
  alert('No Api Key!\nAdd `apiKey=<KEY>` in `.env` file');
}

