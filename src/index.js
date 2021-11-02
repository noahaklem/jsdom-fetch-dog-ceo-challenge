const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then( response => response.json())
.then( results => { 
   for(const key in results.message) {
       let dogContainer = document.getElementById('dog-image-container');
       let newImageEl = document.createElement('img');
       dogContainer.appendChild(newImageEl);
       newImageEl.src = results.message[key];
   }
});

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then (response => response.json())
.then (results => {
    
    breeds = Object.keys(results.message)

    updateBreedList(breeds)
    addBreedSelectListener();

});

function updateBreedList(breeds) {
    
    let breedUl = document.getElementById('dog-breeds');

    for(const key in breeds) {
        let newLi = document.createElement('li');
        newLi.innerText = breeds[key];
        breedUl.appendChild(newLi);
        newLi.addEventListener('click', updateColor);
    }
};

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }

  function updateColor(event) {
    event.target.style.color = 'red';
  }

// function breedsList(breeds) {
//     let breedUl = document.getElementById('dog-breeds');
//     let newLi = document.createElement('li');
//     newLi.innerText = breed;
//     breedUl.appendChild(newLi);

// };

// function addPicture(Url) {
//     let dogContainer = document.getElementById('dog-image-container');
//     let createNewElement = document.createElement('img');
//     createNewElement.src = Url;
//     dogContainer.appendChild(createNewElement);
// };

// let breedUl = document.getElementById('dog-breeds');
// let newLiEl = document.createElement('li');
// breedUl.append(newLiEl);
// console.log(
// console.log(results.message[key])


