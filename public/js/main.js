//  const airing = document.getElementById('airing')
 const tv_key = 'api_key=de8aca6b621f72581d63d31afc37f15d';
 const image_url = 'https://image.tmdb.org/t/p/w500';
//  const search_url_airing = `https://api.themoviedb.org/3/tv/airing_today?api_key=${tv_key}`;
//  const search_url_popular = `https://api.themoviedb.org/3/tv?api_key=${tv_key}`;
//  const search_url_onair = `https://api.themoviedb.org/3/tv/airing_today?api_key=${tv_key}`;
//  const search_url_movies = `https://api.themoviedb.org/3/tv/airing_today?api_key=${tv_key}`;


//  giving access to the view/pages
// var airing = document.querySelector('#airing');
// airing.addEventListener('click', () =>{
//     window.location.href='/pages/airing';
    fetch(`https://api.themoviedb.org/3/tv/airing_today?${tv_key}`,{
    method:'Get',
    body: JSON.stringify(),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
})
    .then(res => res.json())
    .then(data => {
         const list = data.results

        list.map((item) =>{
           const poster =item.poster_path;
           const name =item.name;
           const date = item.first_air_date
           const rating = item.vote_average
           const movie = `<li><img src="${image_url+poster}"><h2>${name}</h2><h3 class="h3">${date}</h3><h5>${rating}</h5></li>`
            document.querySelector('.airing').innerHTML += movie;
         })
    })
    .catch(err => console.log(err));
    

    fetch(`https://api.themoviedb.org/3/tv/popular?${tv_key}`,{
    method:'Get',
    body: JSON.stringify(),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
})
    .then(res => res.json())
    .then(data => {
         const list = data.results

        list.map((item) =>{
           const poster =item.poster_path;
           const name =item.name;
           const date = item.first_air_date
           const rating = item.vote_average
           const movie = `<li><img src="${image_url+poster}"><h2>${name}</h2><h3 class="h3">${date}</h3><h5>${rating}</h5></li>`
            document.querySelector('.popular').innerHTML += movie;
         })
    })
    .catch(err => console.log(err));
    

    fetch(`https://api.themoviedb.org/3/tv/on_the_air?${tv_key}`,{
    method:'Get',
    body: JSON.stringify(),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
})
    .then(res => res.json())
    .then(data => {
         const list = data.results

        list.map((item) =>{
           const poster =item.poster_path;
           const name =item.name;
           const date = item.first_air_date
           const rating = item.vote_average
           const movie = `<li><img src="${image_url+poster}"><h2>${name}</h2><h3 class="h3">${date}</h3><h5>${rating}</h5></li>`
            document.querySelector('.onair').innerHTML += movie;
         })
    })
    .catch(err => console.log(err));
    

    fetch(`https://api.themoviedb.org/3/movie/now_playing?${tv_key}`,{
    method:'Get',
    body: JSON.stringify(),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
})
    .then(res => res.json())
    .then(data =>  {
         const list = data.results

        list.map((item) =>{
           const poster =item.poster_path;
           const name =item.original_title
           const date = item.release_date
           const rating = item.vote_average
           const movie = `<li><img src="${image_url+poster}"><h2>${name}</h2><h3 class="h3">${date}</h3><span class="${rate(rating)}">${rating}</span></li>`
            document.querySelector('.movies').innerHTML += movie;
         })

        });
    // function searchMovie() {
    //     search = document.getElementById('search-latest');
    //     searchTerm = search.value.toUpperCase()
    //     if(searchTerm){
    //         list("https://api.themoviedb.org/3/search/movie/now_playing?"+tv_key+'&query='+searchTerm)
    //     }
    
    // }



    const  rate  = (vote ) => {
        if(vote>=8){
            return 'green'
        }else if(vote>=5 & vote<8){
            return 'orange'
        }else{
            return 'red'
        }
    }
    
//  })    
 
//  })


const form = document.getElementById('form-latest');
const search = document.getElementById('search-latest')
// const buttton = document.getElementById('btn');


 form.addEventListener('click', (e) =>{
  const choice= search.value.toUpperCase()

     if(choice){
    fetch(`https://api.themoviedb.org/3/search/movie/now_playing?${tv_key}`+'&query='+choice,{
        method:'Get',
        body: JSON.stringify(),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(data =>  {
             const list = data.results
    
            list.map((item) =>{
               const poster =item.poster_path;
               const name =item.original_title
               const date = item.release_date
               const rating = item.vote_average
               const movie = `<li><img src="${image_url+poster}"><h2>${name}</h2><h3 class="h3">${date}</h3><span class="${rate(rating)}">${rating}</span></li>`
                document.querySelector('.movies').innerHTML += movie;
             })
    
            });
    e.preventDefault()
        }
        })
    
//  form.addEventListener('submit', (e) =>{
//     const choice = document.querySelector('#search-latest').value;
        

        // fetch(`https://api.themoviedb.org/3/search/movie/now_playing?${tv_key}`+'&query='+choice,{
        //     method:'Get',
        //     body: JSON.stringify(),
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .then(res => res.json())
        //     .then(data =>  {
        //          const list = data.results
        
        //         list.map((item) =>{
        //            const poster =item.poster_path;
        //            const name =item.original_title
        //            const date = item.release_date
        //            const rating = item.vote_average
        //            const movie = `<li><img src="${image_url+poster}"><h2>${name}</h2><h3 class="h3">${date}</h3><span class="${rate(rating)}">${rating}</span></li>`
        //             document.querySelector('.movies').innerHTML += movie;
        //          })
        
        //         });
        // e.preventDefault()
//  })