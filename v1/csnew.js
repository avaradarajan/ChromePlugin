$(function() {
console.log("Base URL")
console.log(document.baseURI)//gives entire URL
console.log(document.domain)//gives the domain name that loaded the page - Use this as key for URL
var formElement = document.querySelectorAll("form")
for (i = 0; i < formElement.length; i++) {
  var pwdEl = formElement[i].querySelector("input[type=\"password\"]")
    //console.log(formElement)
    //console.log(pwdEl)
    if(pwdEl != null)
    {
        break;
    }
    //console.log(String(pwdEl).includes("signup"))
    //console.log(typeof pwdEl)
    //console.log(pwdEl.previousSibling)
}
for (i = 0; i < formElement.length; i++) {
  var unEl = formElement[i].querySelector("input[type=\"text\"]")
}
//console.log(unEl)
//console.log(pwdEl)
var indx = 0
var uEl = null
for (i = 0; i < formElement.length; i++) {
  var allEl = formElement[i].querySelectorAll("input")
}
for (i = 0; i < allEl.length; i++) {
console.log(allEl[i])
if(allEl[i].getAttribute("type") == "password")
{
    console.log(allEl[i])
    console.log(allEl[i-1])
    uEl = allEl[i-1]
    break;
}
}
console.log("Username field")
console.log(uEl)
//console.log(pwdEl.parentNode.closest("input"))
//console.log(pwdEl.parentElement)
//console.log(pwdEl.previousSibling.closest("input"))
//console.log(pwdEl.previousElementSibling.closest("input"))
//console.log(pwdEl.previousSibling)
//console.log(pwdEl.previousElementSibling)
})