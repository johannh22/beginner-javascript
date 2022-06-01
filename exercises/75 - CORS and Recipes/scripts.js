// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"
const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(
    // ! DON'T USE THIS FOR SENSITIVE DATA
    `${proxy}${baseEndpoint}?q=${query}`
  );
  const data = await res.json();
  return data;
}

function displayRecipes(recipes) {
  // console.log('Creating HTML');
  const html = recipes.map(
    (recipe) => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${
        recipe.thumbnail &&
        `<img src="${recipe.thumbnail}" alt="${recipe.title}" style="max-width: 100px"/>`
      }
      <br>
      <a href="${recipe.href}">View Recipe -></a>
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

async function fetchAndDisplay(query) {
  // turn the form off
  form.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(query);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  // turn the form off
  el.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(el.query.value);
  el.submit.disabled = false;
  displayRecipes(recipes.results);
  fetchAndDisplay(form.query.value);
}

form.addEventListener('submit', handleSubmit);
// on page load run it with pizza
fetchAndDisplay('pizza');
