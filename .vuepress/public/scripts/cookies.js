document.addEventListener("DOMContentLoaded", () => {

  console.log(cookieExists('language'));

  // if a cookie has not been defined and they aren't on the language selection page
  if( !cookieExists('language') && window.location.pathname != '/language.html' ) {
    // a cookie doesn't exist yet, we need to create one with a default language.
    document.cookie = `language=java;max-age=${60*60*24*120};path=/`;
    // we are setting a default cookie but we still want the student to update it
    window.location.href="/language.html";
  }

})

function cookieExists(name) {
  return document.cookie.split(';').filter((item) => item.trim().startsWith(`${name}=`)).length;
}
