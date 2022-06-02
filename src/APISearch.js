
export function AppSearch (MovieTitle, isNetflix, isPrime) {

    let flip = true

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '5865186d09msh28f738a14950d04p13e3ddjsn14200648c2e1'
        }
    };




        fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=' + MovieTitle + '&country=ca', options)
            .then(response => response.json())
            .then(response =>

                response.results.map((r) =>  r.locations.map((e ) => {

                    const name = e.display_name
                    const url = e.url

                    if (name === "Netflix" && isNetflix=== true && flip)
                    {
                        flip = false;
                        window.open(url, '_blank').focus();
                    }
                    else if (name=== "Amazon Prime Video" && isPrime ===true && flip)
                    {
                        flip = false
                        window.open(url, '_blank').focus();
                    }




                }

            )) )
            .catch(err => console.error(err));




}


