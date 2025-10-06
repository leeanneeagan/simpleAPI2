// api TV show https://openwhyd.org/username?format=json.
//
///
//
//
//call a search by show for info on show

document.querySelector('button').onclick = searchSHOW


function searchSHOW() {
  const input = document.querySelector('input').value;
  const url = `https://api.tvmaze.com/search/shows?q="${input}`;


  fetch(url)
    .then((res) => res.json())
    .then((data => {
      console.log(data);
      document.querySelector('h2').innerText = data[0].show.name;
    document.querySelector('h3').innerText = data[0].show.genres[0];
    document.querySelector('h3').innerText = data[0].show.genres[1];
    document.querySelector('img').src = data[0].show.image.medium;

    }))
    .catch((err) => console.error(err));


}
