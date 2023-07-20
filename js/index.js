// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepp) => {
    if (state.greenPeppers) {
      onePepp.style.visibility = 'visible';
    } else {
      onePepp.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((element) => {
    if (state.whiteSauce) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = 'visible';
    } else {
      oneCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  document.querySelectorAll('.btn').forEach((element) => {
    if (renderEverything) {
      element.classList.toggle("active")
    } 
  });

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
    let listaUl = document.querySelector('.price ul');
    let liNode = document.querySelectorAll('.price li');

  if (liNode.length === 0){
     let liNode2 = document.createElement('li');
     liNode.append(liNode2)
  } 




    liNode.forEach((element) => {
    if (state.pepperoni === false && element.innerText === '$1 pepperoni'){
      element.remove();
    
    } else if (state.pepperoni === true && !listaUl.innerText.includes('$1 pepperoni')) {
      let liNode = document.createElement('li');
      liNode.innerText = `$1 pepperoni`;

      return listaUl.append(liNode);
    }
    
    if (state.mushrooms === false && element.innerText === '$1 mushrooms'){
      element.remove();
    } else if (state.mushrooms === true && !listaUl.innerText.includes('$1 mushrooms')) {
      let liNode = document.createElement('li');
      liNode.innerText = `$1 mushrooms`;

      return listaUl.append(liNode);
    }
    
    if (state.greenPeppers === false && element.innerText === '$1 green peppers'){
      element.remove();
    
    } else if (state.greenPeppers === true && !listaUl.innerText.includes('$1 green peppers')) {
      let liNode = document.createElement('li');
      liNode.innerText = `$1 green peppers`;

      return listaUl.append(liNode);
    }
    
    if (state.whiteSauce === false && element.innerText === '$3 white sauce'){
      element.remove();
    
    } else if (state.whiteSauce === true && !listaUl.innerText.includes('$3 white sauce')) {
      let liNode = document.createElement('li');
      liNode.innerText = `$3 white sauce`;

      return listaUl.append(liNode);
    }
    
    if (state.glutenFreeCrust === false && element.innerText === '$5 gluten-free crust'){
      element.remove();
    
    } else if (state.glutenFreeCrust === true && !listaUl.innerText.includes('$5 gluten-free crust')) {
      let liNode = document.createElement('li');
      liNode.innerText = `$5 gluten-free crust`;

      return listaUl.append(liNode);
    }
  });
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});