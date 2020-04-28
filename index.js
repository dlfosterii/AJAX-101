const dogButton = document.getElementById('dog-button');

dogButton.addEventListener('click', function () {
  dogButton.textContent = 'Generating Doggo...';
  $.get('https://dog.ceo/api/breeds/image/random').then(function (data) {
    const img = document.createElement('img');
    console.log('data = ', data);
    img.setAttribute('src', data.message);
    const imagesDiv = document.getElementById('images');
    imagesDiv.innerHTML = '';
    imagesDiv.appendChild(img);
    dogButton.textContent = 'Generate Doggo';
  });
});

window.addEventListener('DOMContentLoaded', function() {
    $.get('https://dog.ceo/api/breeds/list')
        .then (function(data) {
            const breeds = data.message;
            const select = document.getElementById('dropdown')
            breeds.forEach(function(breed){
                const option = document.createElement('option');
                option.setAttribute('value', breed);
                option.textContent = breed;
                select.appendChild(option);
        })
    })

})

let select = document.getElementById('dropdown')
select.addEventListener('change', function(event) {
    let breed = event.target.value;
    $.get(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then (function (data){
        const img = document.createElement('img');
        img.setAttribute('src', data.message);
        const imagesDiv = document.getElementById('images');
        imagesDiv.innerHTML = '';
        imagesDiv.appendChild(img);
    })

})