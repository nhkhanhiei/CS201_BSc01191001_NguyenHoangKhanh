let newProductDiv = document.getElementById("new-product");
document.addEventListener("DOMContentLoaded", () => {
    getProduct();
});

function getProduct() 
{
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakestoreapi.com/products", true);
  xhr.onload = function () 
  {
    if (this.status == 200) {
      let results = JSON.parse(this.responseText);
        let output = "";
        let count = 0;
      console.log(results);
     results.forEach(element => {
            if (count==4) {
                return;
         }
         output += `<div class="col-md-3 product">
               
                <img src="${element.image}" class = "apiimg" width ="50%" height = "50%" />
                
                <h5> ${element.title} </h5>

                <div class="price-wrapper">
                <p> $ ${element.price}</p>
                </div>


                </div>`;
         count++;
     });
        newProductDiv.innerHTML = output;
    }
  };
  xhr.send();
}