// Write all your Javascript here!
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function initializer(){

     $.ajax({
        
          url: "https://techkaro-test.herokuapp.com/api/v1/getdata?",

        success: function (data) {
            console.log(data);
               let navText = document.querySelector("#nav-options");
            navText.innerHTML += `
             <h3 class = "nav-heading">${data.menuOptions}</h3>`
            let flowerContainer = document.querySelector(".container")
        //   console.log(data;
                const dateObj = new Date(data.date);
                const month = months[dateObj.getMonth()];
                const date = dateObj.getDate();
                const year = dateObj.getFullYear()
          flowerContainer.innerHTML = `
           
            <div class="card" id="mg-div" >
    <div class="green-div"><h3>What's new at TechKaro</h3></div>
   <div class="image" style="background-image: url(${data.imageURL}"></div>
   <section class = "icon-div">
    <i class="fas fa-calendar-alt"></i>
   <div class="border-bottom"> ${month} ${date}, ${year}
   <i class="fas fa-user"></i>by <span>TechKaro Community</span>
   
   </div>
   
   </section>
   
    <h3>${data.info.heading}</h3>
   <p> ${data.info.description}</p>
</div>

 <div class="right-div">
     <div class="green-div"></div>
  <div class="card">
    <div class="card-body">
    <h3>${data.sale.heading}</h3>
      <p>${data.sale.description}</p>
    </div>
  </div>
 </div>

          `
         
        
        }
    });

}

function eng(){
        $.ajax({
        
          url: " https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en",

         success: function (data) {
            console.log(data);
               let navText = document.querySelector("#nav-options");
            navText.innerHTML = `
             <h3 class = "nav-heading">${data.menuOptions}</h3>`
            let flowerContainer = document.querySelector(".container")
        //   console.log(data;
                const dateObj = new Date(data.date);
                const month = months[dateObj.getMonth()];
                const date = dateObj.getDate();
                const year = dateObj.getFullYear()
          flowerContainer.innerHTML = `
            <div class="card" id="mg-div" >
    
   <div class="image" style="background-image: url(${data.imageURL}"></div>
   <section class = "icon-div">
    <i class="fas fa-calendar-alt"></i>
   <div class="border-bottom"> ${month} ${date}, ${year}
   <i class="fas fa-user"></i>by <span>TechKaro Community</span>
   
   </div>
   
   </section>
   
    <h3>${data.info.heading}</h3>
   <p> ${data.info.description}</p>
</div>

 <div class="right-div">
     <div class="green-div"></div>
  <div class="card">
    <div class="card-body">
    <h3>${data.sale.heading}</h3>
      <p>${data.sale.description}</p>
    </div>
  </div>
 </div>

          `
         
        
        }
    });
}

function urd(){
        $.ajax({
        
          url: " https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur",

 success: function (data) {
            console.log(data);
               let navText = document.querySelector("#nav-options");
            navText.innerHTML = `
             <h3 class = "nav-heading">${data.menuOptions}</h3>`
            let flowerContainer = document.querySelector(".container")
        //   console.log(data;
                const dateObj = new Date(data.date);
                const month = months[dateObj.getMonth()];
                const date = dateObj.getDate();
                const year = dateObj.getFullYear()
          flowerContainer.innerHTML = `
            <div class="card" id="mg-div" >
    
   <div class="image" style="background-image: url(${data.imageURL}"></div>
   <section class = "icon-div">
    <i class="fas fa-calendar-alt"></i>
   <div class="border-bottom"> ${month} ${date}, ${year}
   <i class="fas fa-user"></i>by <span>TechKaro Community</span>
   
   </div>
   
   </section>
   
    <h3>${data.info.heading}</h3>
   <p> ${data.info.description}</p>
</div>

 <div class="right-div">
     <div class="green-div"></div>
  <div class="card">
    <div class="card-body">
    <h3>${data.sale.heading}</h3>
      <p>${data.sale.description}</p>
    </div>
  </div>
 </div>


          `
         
        
        }
    });
}


function chines(){
        $.ajax({
        
          url: " https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh",
 success: function (data) {
            console.log(data);
               let navText = document.querySelector("#nav-options");
            navText.innerHTML = `
             <h3 class = "nav-heading">${data.menuOptions}</h3>`
            let flowerContainer = document.querySelector(".container")
        //   console.log(data;
                const dateObj = new Date(data.date);
                const month = months[dateObj.getMonth()];
                const date = dateObj.getDate();
                const year = dateObj.getFullYear()
          flowerContainer.innerHTML = `
            <div class="card" id="mg-div" >
    
   <div class="image" style="background-image: url(${data.imageURL}"></div>
   <section class = "icon-div">
    <i class="fas fa-calendar-alt"></i>
   <div class="border-bottom"> ${month} ${date}, ${year}
   <i class="fas fa-user"></i>by <span>TechKaro Community</span>
   
   </div>
   
   </section>
   
    <h3>${data.info.heading}</h3>
   <p> ${data.info.description}</p>
</div>

 <div class="right-div">
     <div class="green-div"></div>
  <div class="card">
    <div class="card-body">
    <h3>${data.sale.heading}</h3>
      <p>${data.sale.description}</p>
    </div>
  </div>
 </div>

          `
         
        
        }
    });
}