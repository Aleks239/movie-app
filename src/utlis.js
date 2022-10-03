export const fetchMovies = async () => {
    const response = await fetch('https://swapi.dev/api/films/?format=json');
    if(response.ok){
            const json = await response.json();
            return json;
        }else{
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
           

}



