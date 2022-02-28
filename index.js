// console.log("hello")

const searchPhone =() => {
  const searchField=  document.getElementById("search-Field");
  const searchText= searchField.value;
  console.log(searchText);
  searchField.value="";

  const url= ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
  console.log(url);
  fetch(url)
  .then(res=> res.json())
  .then(data=> displaySearchResults(data.data));

} ;


const displaySearchResults= data=>{
    // console.log(data);

    const searchResult= document.getElementById("search-result");
        data.forEach( data => {
        console.log(data);
        const div= document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`  
        <div class="card ">
          <img src="${data.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <h6 class="card-brand">Brand:${data.brand}</h6>
            <button type="button" class="btn btn-primary w-100 mx-auto">Details</button>
           
          </div>
        </div>

       `;

      searchResult.appendChild(div);



    });
}
