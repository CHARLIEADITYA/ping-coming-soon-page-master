document.querySelector(".BtnClick").addEventListener("click", () => {
   let emailvalue = document.querySelector(".emailInput").value;
    console.log(emailvalue);
    

var mailPattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (mailPattern.test(emailvalue)) {
    // document.querySelector(".error").classList.remove("showError");
    // document.querySelector(".errorPara").classList.add("hide");
    document.querySelector(".error_msg").style.display="none"
    document.querySelector(".emailInput").style.border="1px solid hsl(223, 87%, 63%)"
} 
else {
    // document.querySelector(".error").classList.add("showError");
    // document.querySelector(".errorPara").classList.remove("hide");
    document.querySelector(".error_msg").style.display="block" ; 
    document.querySelector(".emailInput").style.border="1px solid hsl(354, 100%, 66%)"
  }
});
