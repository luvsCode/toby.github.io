const toggleButton = document.getElementsByClassName('navToggle')[0];
const toggleButtonOff = document.getElementsByClassName('navHide')[0];
const naviLinks = document.getElementsByClassName('navLinks');
const form = document.querySelector('form');
const containers = document.querySelectorAll('.inputContainer');
const tl = gsap.timeline({defaults: {duration: 0.75, ease: 'Power.easeOut'}});

//service Worker
if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('./serviceWorker.js')
    .then(function(registration)
    {
        //Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err)
    {
        //Registration failed
        console.log('ServiceWorker registration failed: ', err);
    })
}


//GSAP ANIMATION
tl.fromTo('.txtArea', {opacity: 0}, {opacity: 1, duration: 3.0})
tl.fromTo('.profileSvg', {opacity: 0}, {opacity: 1, duration: 3.5},'<')
tl.fromTo('.bgCircles', {y:0}, {y:-20, yoyo: true, repeat: -1, duration: 0.75}, "<")
tl.to('.cpuSqr', {scale: 2, yoyo: true, repeat: -1}, '<')
tl.to('.phnSqr',{scale: 2, yoyo: true, repeat: -1}, '<')

toggleButton.addEventListener('click', () => 
{

  console.log('toggled');
  for(var i=0; i < naviLinks.length; i++)
  {
    naviLinks[i].classList.toggle('active');
  }

 

})



//-------------------------------------------------------------------------------------------------------------------------------------------------------------
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
}

const appearOnScroll = new IntersectionObserver(
  function(entries, appearOnScroll)
  {
    entries.forEach(entry =>
      {
        if(!entry.isIntersecting)
        {
          return;
        }
        else
        {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      })
  },
  appearOptions);

  faders.forEach(fader =>
    {
      appearOnScroll.observe(fader);
    })

    sliders.forEach(slider =>
    {
      appearOnScroll.observe(slider);
    })

containers.forEach((container) =>{

  const input = container.querySelector('input');
  const line = container.querySelector(".elastic-line");
  const placeholder = container.querySelector('.placeHolder');
 // const inputName = container.querySelector('.inputName'); 
  //check for text input
         //validation

    //Name Validation
    input.addEventListener("input", (e) => {
      if (e.target.type === "text") {
        let inputText = e.target.value;
        if (inputText.length > 2) {
          colorize("#6391E8", line, placeholder, input);
        } else {
          colorize("#FE8C99", line, placeholder, input);
        }
      }
      //Validate Email

      function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
      
      if (e.target.type === "email") {
        let valid = validateEmail(e.target.value);
        if (valid) {
          colorize("#6391E8", line, placeholder);
        } else {
          colorize("#FE8C99", line, placeholder);
        }

      
      }
      //Validate Phone

      function validatePhone(phone) {
        let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(phone);
      }


      if (e.target.type === "tel") {
        let valid = validatePhone(e.target.value);
        if (valid) {
          colorize("#6391E8", line, placeholder);
        } else {
          colorize("#FE8C99", line, placeholder);
        }

        
      }

    })

  })

//COLORIZE FUNCTION
function colorize(color, line, placeholder) {
  gsap.to(line, { stroke: color, duration: 0.75 });
  gsap.to(placeholder, { color: color, duration: 0.75 });
}