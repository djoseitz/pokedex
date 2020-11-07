//Dave's Pokemon index
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150"
  function getAll() {
      return pokemonList;
  }

  function add(pokemon) {
      if (typeof pokemon === 'object') {
          pokemonList.push(pokemon);
      }
      else {
          alert('Invalid Pokemon')
      }
  }

    // loads modal with pokemon info
    // function showModal(pokemon) {
    //   let modalContainer = document.querySelector('#modal-container');
    //   modalContainer.classList.add('is-visible');

    //   modalContainer.innerHTML = '';
    //   let modal = document.createElement('div');
    //   modal.classList.add('modal');

    //   let closeButtonElement = document.createElement('button');
    //   closeButtonElement.classList.add('modal-close');
    //   closeButtonElement.innerText = 'Close';
    //   closeButtonElement.addEventListener('click', hideModal);

    //   let titleElement = document.createElement('h1');
    //   /*pokemon name in modal */
    //   titleElement.innerText = pokemon.name;

    //   /* pokemon details */
    //   let pokemonHeight = document.createElement('p');
    //   pokemonHeight.innerText = `Height: ${pokemon.height}`;   

    //   /*pokemon image */
    //   let imgElement = document.createElement('img');
    //   imgElement.classList.add('pokemon-img');
    //   imgElement.src = pokemon.imageUrl;

    //   let imgElementAnimated = document.createElement('img');
    //   imgElementAnimated.classList.add('pokemon-img');
    //   imgElementAnimated.src = pokemon.imageUrlAnimated;

    //   let types = document.createElement('p')
    //   types.innerText = pokemon.types

    //   modal.appendChild(closeButtonElement);
    //   modal.appendChild(titleElement);
    //   modal.appendChild(pokemonHeight);
    //   modal.appendChild(types);
    //   modal.appendChild(imgElement);
    //   modal.appendChild(imgElementAnimated);
    //   modalContainer.appendChild(modal);



      
    //   window.addEventListener('keydown', (e) => {
    //     console.log(e)
    //     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    //       hideModal();  
    //     }
    //   });
      
    //   modalContainer.addEventListener('click', (e) => {
    //     // Since this is also triggered when clicking INSIDE the modal container,
    //     // We only want to close if the user clicks directly on the overlay
    //     let target = e.target;
    //     if (target === modalContainer) {
    //       hideModal();
    //     }
    //   });
    // }

    function showModal(item) {
      let modalTitle = $(".modal-title");
      modalTitle.empty();
      let modalHeader = $(".modal-header");
      let pokemonName = $('<h1 style="color: white;">' + item.name + "</h1>");
      let modalBody = $(".modal-body");
      modalBody.empty();
      let imageFront = $(
        '<img class="modal-img" alt="..." style="width: 50%; padding: 30px;">'
      );
      imageFront.attr("src", item.imageUrl);
      let imageAnimated = $(
        '<img class="modal-img" alt="..." style="width: 35%; padding: 30px;">'
      );
      imageAnimated.attr("src", item.imageUrlAnimated);
      let modalProfile = $(
        '<h4 style="background-color:#d88780; padding: 5px; color: white;">Profile</h4>'
      );
      let pokemonHeight = $(
        "<p>" + "<strong>Height</strong>: " + item.height + '"' + "</p>"
      );
      // //creating element for type in modal content
      let pokemonTypes = $(
        "<p>" + "<strong>Type</strong>: " + item.types + "</p>"
      );
      // //creating element for abilities in modal content
      let pokemonAbilities = $(
        "<p>" + "<strong>Abilities</strong>: " + item.abilities + "</p>"
      );
  
      modalTitle.append(pokemonName);
      modalBody.append(imageFront);
      modalBody.append(imageAnimated);
      modalBody.append(modalProfile);
      modalBody.append(pokemonHeight);
      modalBody.append(pokemonTypes);
      modalBody.append(pokemonAbilities);
  
      if (item.types.includes("grass")) {
        $(".modal-header").css("background-color", "rgb(120, 200, 80)");
      } else if (item.types.includes("fire")) {
        $(".modal-header").css("background-color", "rgb(240, 128, 48)");
      } else if (item.types.includes("poison")) {
        $(".modal-header").css("background-color", "rgb(168, 144, 240)");
      } else if (item.types.includes("water")) {
        $(".modal-header").css("background-color", "rgb(104, 144, 240)");
      } else if (item.types.includes("bug")) {
        $(".modal-header").css("background-color", "rgb(168, 184, 32)");
      } else if (item.types.includes("water")) {
        $(".modal-header").css("background-color", "rgb(69, 120, 237)");
      } else if (item.types.includes("ice")) {
        $(".modal-header").css("background-color", "rgb(66, 174, 174)");
      } else if (item.types.includes("electric")) {
        $(".modal-header").css("background-color", "rgb(252, 234, 161)");
      } else if (item.types.includes("ground")) {
        $(".modal-header").css("background-color", "rgb(219, 181, 77)");
      } else if (item.types.includes("fairy")) {
        $(".modal-header").css("background-color", "rgb(232, 120, 144)");
      } else if (item.types.includes("ghost")) {
        $(".modal-header").css("background-color", "rgb(100, 78, 136)");
      } else if (item.types.includes("normal")) {
        $(".modal-header").css("background-color", "rgb(156, 156, 99)");
      }
    }

    function hideModal() {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
    }

    function showDetails(pokemon) {
      loadDetails(pokemon).then(function (){
        showModal(pokemon)
      })
    }

//Create pokemon list
    function addListItem(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        let row = $(".row");
  
        let card = $(
          '<div class="card mt-5" style="width: 18rem; margin:13px;"></div>'
        );
        let image = $('<img class="card-img-top" alt="..." style="width:40%;">');
        let title = $('<h5 class="card-title">' + pokemon.name + "</h5>");
        image.attr("src", pokemon.imageUrlAnimated);
        let body = $('<div class="card-body" style="text-align: center;"></div>');
        let button = $(
          '<button type="button" class="btn" style="background-color: #d88780; color: white" data-toggle="modal" data-target="#myModal">See profile</button>'
        );
  
        //append
        row.append(card);
        card.append(image);
        card.append(body);
        body.append(title);
        body.append(button);
  
        button.on("click", function (event) {
          showDetails(pokemon);
        });
      });
    }

    function LoadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.other.dream_world.front_default;
          item.imageUrlAnimated = details.sprites.versions['generation-v']['black-white'].animated.front_default;
          item.height = details.height;
          item.types = [];
          details.types.forEach((typeObject) => {
              item.types.push(typeObject.type.name)
          });
          item.abilities = [];
          details.abilities.forEach((typeObject) => {
              item.abilities.push(typeObject.ability.name)
          });
        }).catch(function (e) {
          console.error(e);
        });
    }

  return {
      getAll: getAll,
      add: add,
      addListItem: addListItem,
      LoadList: LoadList,
      loadDetails: loadDetails
    };
})();

pokemonRepository.LoadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  // li = ul.getElementsByTagName("");
  li = ul.querySelectorAll(".card");
  // console.log(li[0].querySelector(".card-body").querySelector(".card-title"));
  for (i = 0; i < li.length; i++) {
    // a = li[i].getElementsByTagName("a")[0];
    a = li[i].querySelector(".card-body").querySelector(".card-title");
    console.log(a.innerText);
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}