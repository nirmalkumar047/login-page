




//google oAuth
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}



const login = document.getElementById('login');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('signin');

registerBtn.addEventListener('click', () => {
    login.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    login.classList.remove("active");
});