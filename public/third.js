let recipe;
let params = new URL(document.location).searchParams;
let item = params.get("item");

const loader = document.getElementsByClassName("loader_container")[0];
console.debug(loader);
console.log(item);

document.getElementById("title").innerText = item;

handle_click(item);
searchWikiBriefs(item);

async function get_data(options) {
  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
}

function concatenateArrayWithNewline(array) {
  return array.join("\n");
}

async function searchWikiBriefs(item) {
  const url = `https://wiki-briefs.p.rapidapi.com/search?q=${encodeURIComponent(
    item
  )}&topk=3`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e8d2e68927msha704f74378b21f9p133bdcjsn9992781500cb",
      "X-RapidAPI-Host": "wiki-briefs.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.summary);
    document.getElementById(
      "textShadow"
    ).innerText = concatenateArrayWithNewline(result.summary);
  } catch (error) {
    console.error(error);
  }
}

async function handle_click(item) {
  let options1 = {
    method: "GET",
    url:
      "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data",
    params: {
      ingr: item,
      "nutrition-type": "cooking",
    },
    headers: {
      "X-RapidAPI-Key": "da37d373abmshc8836ca74dbb9e1p14d150jsn6d1ab50a4dce",
      "X-RapidAPI-Host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
    },
  };

  // let options2 = {
  //   method: "GET",
  //   url: "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2",
  //   params: {
  //     q: item,
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "da37d373abmshc8836ca74dbb9e1p14d150jsn6d1ab50a4dce",
  //     "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  //   },
  // };/

  const options2 = {
    method: "GET",
    url: "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2",
    params: {
      type: "public",
      q: item,
    },
    headers: {
      "Accept-Language": "en",
      "X-RapidAPI-Key": "da37d373abmshc8836ca74dbb9e1p14d150jsn6d1ab50a4dce",
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    },
  };

  get_data(options1).then((r) => {
    console.log(r.data.healthLabels);
    healthLabels = r.data.healthLabels;
    for (i = 0; i < healthLabels; i == 0) {
      a = document.getElementById("green-list").createElement("li");
      console.log(a);
    }
  });

  get_data(options2).then((r) => {
    console.log(r.data.hits[0].recipe.image);
    document.getElementById("need-img").src = r.data.hits[1].recipe.image;
    console.log(r.data.hits[0].recipe.ingredientLines);
    recipe_arr = r.data.hits[0].recipe.ingredientLines;

    let p = "";
    const recipe = concatenateArrayWithNewline(recipe_arr);
    console.log(recipe);
    document.getElementsByClassName("recipeShadow")[0].innerText = recipe;

    loader.style.display = "none";
  });
}
