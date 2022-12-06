# Idee - Zadanie rekrutacyjne

## Wymagania:
* Breadcrumbs
* Formularz logowania 
    * Username: pole wymagane, max 100 znaków
    * Email Adress: pole wymagane, poprawny email
    * Password: pole wymagane, min 7 znaków, max 25 znaków

### Nagłówek:

Na każdej stronie do sekcji header dodajemy id "navbar". W pliku navbar.html tworzymy cały nagłówek i przy pomocy skryptu w pliku navbar.js 'wklejamy' nagłówek na każdą stronę.
* index.html
```
<header id="navbar"> 
</header>
```
* navbar.js
```
$(document).ready(function(){ 
    $.get("navbar.html", function(data) {
      $("#navbar").html(data);
    });
  }); 
```
### Breadcrumbs:

Breadcrumbs'y zostały zaimplementowane skryptem w pliku breadcrumbs.js. Dynamicznie pobierają lokalizację, w której się znajdujemy i wstawiają do elementu div, który znajduję się w pliku navbar.html jako część nagłówka.
* navbar.html
```
<div class="container">
    <div class="row">
        <div class="col-sm-12">
                <ol class="breadcrumb" >
                    <li class="breadcrumb-item active" >
                        <a href=# id="breadcrumbs" >Home</a>
                    </li>
                </ol>
        </div>
    </div>
</div>
```
* breadcrumbs.js
```
const breadcrumbsEl = document.querySelector("#breadcrumbs");
function breadcrumbs(){
    const here = location.href.split('/').slice(3);
    const parts = [{"text": 'Home', "link": '/'}];
    for (let i = 0; i < here.length; i++) {
        const part = here[i];
        const text = decodeURIComponent(part).split('.')[0];
        const link = '/' + here.slice(0, i + 1).join('/');
        parts.push({"text": text, "link": link});}
    return parts.map((part) => {
        return "<a href=\"" + part.link + "\">" + part.text + "</a>"
    }).join('<span style="padding: 5px"> / </span>');
}
breadcrumbsEl.innerHTML = breadcrumbs();
```

### Walidacja:

* index.html
Walidacja została wykonana po stronie skryptu js w pliku login.js. Złe dane powodują pokazanie komunikatu, czerwonej ramki naokoło okna, w którym dane są niepoprawne oraz przerwanie procesu logowania.

```
 <div class="col-sm-8 login_panel">
    <form action="" id="login-form" class="login_panel_inside">
        <div class="form-group">
            <label for="Username">Username</label>
            <input type="text"  id="username" class="form-control";>
        </div>
        <div class="form-group">
            <label for="Email">Email Address</label>
            <input type="email" id="email" class="form-control">
        </div>
        <div class="form-group">
            <label for="Password">Password</label>
            <input type="password" id="password" class="form-control">
        </div>
        <div class="login_panel_inside_forgotPassword"> Forgot Password?
            <button type="button" id="button_login"><span>Login</span></button>
        </div>
    </form>
</div>
```
* login.js
```
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
```
