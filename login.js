
 $(document).ready(function(){ 

    const form = document.querySelector("form#login-form");
    console.log(form);
    //const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const button = document.getElementById("button_login");
    button.addEventListener("click", function() {
   
      const nameEl = form.querySelector("input#username");
      const passwordEl = form.querySelector("input#password");
      const emailEl = form.querySelector("input#email");

      const name = form.querySelector("input#username").value;
      const email = form.querySelector("input#email").value;
      const password = form.querySelector("input#password").value;

      console.log(nameEl);
      console.log(name);
      console.log(email);
      console.log(password);
      if((name.length >= 1 && name.length <= 100) &&( password.length >= 7 && password.length <=25)){
        nameEl.style.backgroundColor="white";
        passwordEl.style.backgroundColor="white";
        console.log("Git")
        return true;
      }else{
          if(name < 1 || name > 100){
            nameEl.style.backgroundColor = "red";
          }else{
            nameEl.style.backgroundColor="white";
          }
          if(password < 7 || password > 25){
            passwordEl.style.backgroundColor = "red";
          }else{
            passwordEl.style.backgroundColor="white";
          }
         // nameEl.style.backgroundColor = "red";
       alert("Złe dane");
       
          


        return false;
       
      
      }
      


    })

  }); 


