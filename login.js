
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

      const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      

      console.log(nameEl);
      console.log(name);
      console.log(email);
      console.log(password);
      
      if((name.length >= 1 && name.length <= 100) &&( password.length >= 7 && password.length <=25) && (reg.test(email))){
        nameEl.style.backgroundColor="white";
        emailEl.style.backgroundColor="white";
        passwordEl.style.backgroundColor="white";
        console.log("Git")
        return true;
      }else{
          if(name < 1 || name > 100){
            nameEl.style.border = "solid #A61C2E";
          }else{
            nameEl.style.border = "grey";
          }
          if(password < 7 || password > 25){
            passwordEl.style.border = "solid #A61C2E";
          }else{
            passwordEl.style.border = "grey";
          }
          if(!reg.test(email)){
            emailEl.style.border = "solid #A61C2E";
          }else{
            emailEl.style.border = "grey";
          }
         
       alert("Złe dane");
       
          


        return false;
       
      
      }
      


    })

  }); 


