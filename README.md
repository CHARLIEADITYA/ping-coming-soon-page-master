# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![DESKTOP](./assets/images/127.0.0.1_5500_index.html%20(1).png)
![MOBILE](./assets/images/127.0.0.1_5500_index.html%20(2).png)
![ACTIVE STATUS](./assets/images/127.0.0.1_5500_index.html%20(3).png)

### Links

- Solution URL: [Solution](https://github.com/CHARLIEADITYA/ping-coming-soon-page-master.git)
- Live Site URL: [view](https://charlieaditya.github.io/ping-coming-soon-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned
here I learned how to implement the field and validation of email. 

To see how you can add code snippets, see below:

```js
document.querySelector(".BtnClick").addEventListener("click", () => {
   let emailvalue = document.querySelector(".emailInput").value;
    console.log(emailvalue);
    

var mailPattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (mailPattern.test(emailvalue)) {
    document.querySelector(".error_msg").style.display="none"
    document.querySelector(".emailInput").style.border="1px solid hsl(223, 87%, 63%)"
} 
else {
    document.querySelector(".error_msg").style.display="block" ; 
    document.querySelector(".emailInput").style.border="1px solid hsl(354, 100%, 66%)"
  }
});
```

## Author

- Github - [CHARLIEADITYA](https://github.com/CHARLIEADITYA)
- Frontend Mentor - [@CHARLIEADITYA](https://www.frontendmentor.io/profile/CHARLIEADITYA)
- linkedin - [@adityabaranwal34](https://www.linkedin.com/in/adityabaranwal34/)
