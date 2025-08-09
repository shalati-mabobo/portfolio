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
    document.getElementById('contact-form').addEventListener('submit',function(e){
 e.preventDefault();
 alert("Thank you for reaching out!  I'll get back to you soon." );
 this.reset();
    });






/*(function () {
    emailjs.init("KbnotOfVXjdPIqWFD"); // Your EmailJS user/public key
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        
    };

    emailjs.send('service_5xysxol', 'template_mkik6ks', templateParams)
        .then(() => {
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form
        }, (error) => {
            alert('Failed to send your message. Please try again later.\n' + JSON.stringify(error));
        });
});
*/
function SendEmail(){
		const btn = document.getElementById('button');

	document.getElementById('form')
	 .addEventListener('submit', function(event) {
	   event.preventDefault();

	   btn.value = 'Sending...';

	   const serviceID = 'service_5xysxol';
	   const templateID = 'template_mkik6ks';

	   emailjs.sendForm(serviceID, templateID, this)
		.then(() => {
		  btn.value = 'Send Email';
		  alert('Sent!');
		}, (err) => {
		  btn.value = 'Send Email';
		  alert(JSON.stringify(err));
		});
	});
	}



