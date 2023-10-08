// === VARIABLES === //
var body = document.body ; 
var letter = document.getElementById("letter");
var myName = document.getElementById("name");
var contactButton = document.getElementById("contact-button");
var works = document.querySelectorAll(".project");
var moon = document.getElementById("moon-icon")


//Work links 
works.forEach((work)=>{
    work.addEventListener("click" , () =>{
        const proj = work.getAttribute("id");
        switch (proj) {
            case "proj-one":
                window.open("https://sadiaimran.github.io/sunnyside-agency-landing-page/" , '_blank')
                break;
            case "proj-two":
                window.open("https://sadiaimran.github.io/Manage-Landing-Page-Solution/" , '_blank')
                break;
            case "proj-three":
                window.open("https://sadiaimran.github.io/Loopstudios-landing-apge-solution/" , '_blank')
                break;
            case "proj-four":
                window.open("https://sadiaimran.github.io/Flyo-Front-end-Challenges-Solutions/" , '_blank')
                break;
            case "proj-five":
                window.open("https://sadiaimran.github.io/Calculator-solution/" , '_blank')
                break;
            case "proj-six":
                window.open("https://sadiaimran.github.io/Newsletter-sign-up-form-with-success-message/" , '_blank')
                break;
            default:
                break;
        }
    })
})



// validating email
function validateEmail() {
    var email = document.getElementById("sender-email").value;
    var rel = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (!rel.test(email)) {
      document.getElementById("valid-email").innerHTML =
        "Valid email Required";
        document.getElementById("valid-email").style.color = "red" ; 
      document.getElementById("sender-email").style.border = "0.5px solid red";
      document.getElementById("sender-email").style.color = "red";
      return false;
    } else {
      document.getElementById("valid-email").innerHTML = "";
      document.getElementById("sender-email").style.border =
        "0.5px solid rgba(0,0,0,0.3)";
        document.getElementById("sender-email").style.color =
        "black";
        return true ; 
    }
  }



//=== Submit a Message ===//
contactButton.addEventListener("click" , () => {
    if(validateEmail() == true){
        var name = document.getElementById("sender-name").value;
        var email = document.getElementById("sender-email").value;
        var subject = "Important" ; 
        var message = document.getElementById("message").value ; 
        var toEmail = 'sadiaimran837@gmail.com' ; 
        const mailtolink = `mailto:${toEmail}?subject=${subject+" from "+name}&body=${message}`;
        window.location.href = mailtolink ; 
    }
})




// === LOGO Navigate to === //
letter.addEventListener("click" , () => {
    window.location.reload(); 
}) ; 
myName.addEventListener("click" , () => {
    window.location.reload(); 
}) ; 

moon.addEventListener("click" , (e) =>{
    body.classList.toggle("dark");
})




const scroll = ScrollReveal({
    origin : 'top' , 
    distance : '80px' , 
    duration: 2000 , 
    reset : true 
});

// Home Scroll
scroll.reveal('.intro' ,{}) 
scroll.reveal('.contact-wrapper' ,{delay: 100})
scroll.reveal('.section-1-right-side' ,{delay: 100})
scroll.reveal('.socials a ' ,{interval: 200})

// About Scroll
scroll.reveal('#about',{})
scroll.reveal('.about-image',{delay:100})
scroll.reveal('.about-intro h3',{delay:100})
scroll.reveal('.about-intro p',{delay:200})

// Skills Scroll 
scroll.reveal("#skills",{})
scroll.reveal("#skill-intro",{delay :100 })
scroll.reveal(".skill-wrapper",{interval : 100})
scroll.reveal(".skill-image",{delay : 100})

// Work Scroll
scroll.reveal('#work' ,{})
scroll.reveal('.project' ,{interval:100})

// Contact Scroll
scroll.reveal("#contact",{})
scroll.reveal(".contact-container input",{interval:100})

// Navigation mobile Menu
const navMobile = document.querySelector('.nav-mobile');
const headerLinks = document.querySelector('.mobile-header-links');
const CV = document.querySelector(".CV");


navMobile.addEventListener("click" , () => {
    headerLinks.classList.toggle("mobile-header-links-open") ; 
    const img = navMobile.querySelector('img');
    if (img.src.endsWith("menu-regular-24.png")) {
        img.src ="./images/cross.png" ; 
    }else{
        img.src = "./images/menu-regular-24.png" ; 
    }
})