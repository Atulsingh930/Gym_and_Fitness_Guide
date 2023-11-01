export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0c6e5e8d3msha22b607e5ce93c1p1a79d7jsn3c195e68e75f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET', 
    headers: {
      'X-RapidAPI-Key': 'e0c6e5e8d3msha22b607e5ce93c1p1a79d7jsn3c195e68e75f',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}