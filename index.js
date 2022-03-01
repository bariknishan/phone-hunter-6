


//////////---------------------------------search area --------------------------///////////


const searchPhone = (phones) => {
  const searchField = document.getElementById("search-Field");
  const searchText = searchField.value;
  searchField.value = "";

  if (searchText == "") {
    document.getElementById("error-field").style.display = "block";
    document.getElementById("search-result").style.display = "none";
  }

  else {
    document.getElementById("error-field").style.display = "none";
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`

    fetch(url)
      .then(res => res.json())
      .then(phones => displaySearchResults(phones.data.slice(0, 20)));

  }
};

/////////////////------------------ Display result area--------------------//////////////////////

const displaySearchResults = phones => {
  const searchPhoneResult = document.getElementById("search-result");
  searchPhoneResult.textContent = "";
  phones.forEach(phone => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `  
        <div class="card ">
          <img  src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <h6 class="card-brand">Brand:${phone.brand}</h6>
            <button  onclick= "loadPhoneDetails('${phone.slug}') "  type="button" class="btn btn-primary w-75 mx-auto">Details</button>
          </div>
        </div>  `;
        
    searchPhoneResult.appendChild(div);

  });
}
const loadPhoneDetails = phoneId => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId} `
  fetch(url)
    .then(res => res.json())
    .then(phones => displayPhoneDetails(phones.data));
}

///////////-----------------------------------phone Details -----------------Area////////////////

const displayPhoneDetails = phone => {

  const phoneDetails = document.getElementById("phone-details");
  phoneDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card")
  div.innerHTML = `<img   src= "${phone.image}" class="card-img-top" alt="...">
   <div class="card-body ">
     <h5 class="card-title  fw-bold">${phone.name}</h5>
     <h6 class="card-title fw-bold">Brand:${phone.brand}</h6>
     <h6 class="card-title fw-bold ">Model ID:${phone.slug}</h6>
     <h4 class="card-title fw-bold " > Main Features:</h4>
     <p class="card-text  ">Storage:${phone.mainFeatures.storage}</p>
     <p class="card-text ">Sensor: ${phone.mainFeatures.sensors}</p>
     <h4 class="card-title fw-bold"> Other Features:</h4>
     <p class="card-text ">WLAN: ${phone.others?.WLAN}</p>
     <p class="card-text ">Blootooth: ${phone.others?.Bluetooth}</p>
     <p class="card-text ">GPS: ${phone.others?.GPS}</p>
     <p class="card-text ">NFC: ${phone.others?.NFC}</p>
     <p class="card-text ">RADIO: ${phone.others?.Radio}</p>
     <p class="card-text ">USB: ${phone.others?.USB}</p>
     <p class="card-text ">Relase Date:${phone.releaseDate}</p>
   </div>  `;

  phoneDetails.appendChild(div);



}

