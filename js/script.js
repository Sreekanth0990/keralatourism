const initBg = (autoplay = true) => {
    const bgImgsNames = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg','bg7.jpg'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);    

    $.backstretch(bgImgs, {duration: 2000, fade: 1000});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}


$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 8 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});



const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if(windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `${bgHeight}px solid transparent`);                
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}



const form=document.getElementById('form');
const formlog=document.getElementById('formlog');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
const mobile=document.getElementById('mobile');




//Show input error message

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
    
}



//Email

function isValidEmail(email)
{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Password

function isValidPassword(password)
{
    const psr= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return psr.test(String(password));
}

//passwordmatch

function isValidPasswordmatch()
{
    if(password.value!=password2.value)
    {
                return false;
    }
    return true;
}

//phone number

function isValidmobile(mobile)
{
    const mob= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return mob.test(String(mobile));
}





// function loginval(){
   

// if(email.value===''){
//         showError(email,'Please enter Registered Email');
//     }else if(!isValidEmail(email.value)){
//         showError(email,'Please enter Valid Email');
//     }

//     if(password.value===''){
//         showError(password,'Please enter Password');
//     }else if (!isValidPassword(password.value)){
//         showError(password,"Password is not valid .");       

//     }
// }

form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value===''){
        showError(username,'Username is required');
    }
    else{
        showSuccess(username);
    }
    if(email.value===''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid');
    }
    else{
        showSuccess(email);
    }

    if(mobile.value===''){
        showError(mobile,'Phone number is required');
    }else if(!isValidmobile(mobile.value)){
        showError(mobile,'Phone number is not valid');
    }
    else{
        showSuccess(mobile);
    }

    if(password.value===''){
        showError(password,'Password is required');
    }else if (!isValidPassword(password.value)){
        showError(password,"Password is not valid .");
        // window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");

    }
    else{
        showSuccess(password);
    }
    if(password2.value===''){
        showError(password2,'confirm password is required');
    }else if (isValidPasswordmatch()==false){
        showError(password2,"Passwords Doesnt Match, Please Re-enter :");
    }
    else{
        showSuccess(password2);
    }
    Regsuccess();
    
});

function Regsuccess(){

    if(isValidEmail(email.value)&&isValidmobile(mobile.value)&&isValidPassword(password.value)&&isValidPasswordmatch()==true)
    {
     alert("You Registration was successful");

    }

}


