
 $(document).ready(function(){ 

    const form = document.querySelector("form#login-form");
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
      
      var usernameInfo = "";
      var passwordInfo = "";
      var emailInfo = "";

      console.log(nameEl);
      console.log(name);
      console.log(email);
      console.log(password);
      
      if((name.length >= 1 && name.length <= 100) && ( password.length >= 7 && password.length <=25) && (reg.test(email))){

        nameEl.style.border = "grey";
        emailEl.style.border = "grey";
        passwordEl.style.border = "grey";
        // Wysłanie do index.php
        alert("Przesłano: \nUsername "+ name +"\nEmail"+ email +"\nPassword "+ password  );
        return true;
      }else{
        if(name.length < 1 || name.length >= 100){
          nameEl.style.border = "solid #A61C2E";
          usernameInfo = "Twój username nie może być pusty ani dłuższy niż 100 znaków";
        }else{
          nameEl.style.border = "grey";
        }
        if(!reg.test(email)){
          emailEl.style.border = "solid #A61C2E";
          emailInfo = "Twój email musi być poprawnym emailem (przykładowanyemail@mail.pl)";
        }else{
          emailEl.style.border = "grey";
        }
        if(password.length <= 7 || password.length >= 25){
          passwordEl.style.border = "solid #A61C2E";
          passwordInfo = "Twoje hasło musi zawierać od 7 do 25 znaków";
        }else{
          passwordEl.style.border = "grey";
        }
        alert("Złe dane \n" + usernameInfo + "\n" + passwordInfo +"\n" + emailInfo);
        return false; 
      }
      


    })

  }); 


