/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()  
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_562pap9', 'template_y2jwfr9', '#contact-form', 'eu-1WTdUlXGNU-YMi')

    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()

    }, () => {

        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'

    })

}

contactForm.addEventListener('submit', sendEmail)



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {

  	const scrollDown = window.scrollY

	sections.forEach(current => {

		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {

			sectionsClass.classList.add('active-link')

		} else {
			sectionsClass.classList.remove('active-link')

		} 

	})

}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

