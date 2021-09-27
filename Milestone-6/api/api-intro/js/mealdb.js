const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    let errorDiv = document.getElementById('error');

    if(searchField.value != ""){
        // load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
        // clear data
        errorDiv.innerHTML = "";
    }
    else {
        errorDiv.innerHTML = "";
        let p = document.createElement('p');
        p.innerText = `Your field is empty!`;
        errorDiv.appendChild(p);
    }

    // clear data
    searchField.value = "";

}

const displayFoods = (meals) => {
    const displayFood = document.getElementById('display-food');
    // clear data
    displayFood.innerHTML = "";

    // display data
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                </div>
            </div>
        `
        displayFood.appendChild(div);

        // console.log(meal);
    })
}

const loadMealDetail = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}

/* You can display detail */
const displayMealDetail = (meal) => {
    console.log(meal);
}