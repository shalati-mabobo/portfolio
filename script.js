/**creating a button click show hide navbar */
var togglebtn = document.querySelector('.togglebtn');
var nav = document.querySelector('.navlinks');
var links = document.querySelectorAll('.navlinks li');
togglebtn.addEventListener('click', function() {
    this.classList.toggle('click');
    nav.classList.toggle('open');
    });

    var typed=new Typed('.input',{
        strings:['  Software Developer',  'Web Developer', '  Multimedia Specialist' , 'Graphic Designer'],
        typedSpeed: 70,
        backSpeed: 55,
        loop:true,
    })

    function toggleText() {
        const moreText = document.getElementById("moreText");
        const btn= document.getElementById("readMoreBtn");
        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            btn.textContent = "Read Less";
        } else {
            moreText.style.display = "none";
            btn.textContent = "Read More";
        }
    }
   

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.getElementById('button');
    btn.value = 'Sending...';
    emailjs.sendForm('service_5xysxol', 'template_mkik6ks', this)
      .then(() => {
        btn.value = 'Send Message';
        alert('Your message has been sent successfully!');
        this.reset();
      }, (err) => {
        btn.value = 'Send Message';
        alert('Failed to send your message. Please try again later.\n' + JSON.stringify(err));
      });
});



    
	




