let id = document.querySelector('input[name=id]');
let password = document.querySelector('input[name=password');
let submit = document.querySelector('input[type=submit]');
submit.onclick = function(){
  if((id.value != '') && (password.value != '')){
    localStorage.id = id.value;
    localStorage.password = password.value;
    if(window.navigator.onLine == true){   //  del  
      window.history.replaceState({},'',"datach.html");
      window.location.href = 'datach.html';
    }
    else {
      alert("يجب الاتصال بالانترنت");
    }
  }
  else
    alert('يجب إدخال المعلومات كاملة');
}

if(localStorage.lupdate != undefined){
  var appup_div = document.getElementsByClassName('appupdate');
  var appimg = document.querySelector('.appupdate img');
  var updabtn = document.getElementsByClassName('updabtn');
  var updap = document.getElementsByClassName('updap');
  
  appup_div[0].style.display = 'block';
  appimg.src = localStorage.lappimg;
  updabtn[0].href = localStorage.lapplink;
  updap[0].textContent = localStorage.lapplink;
}

//let permission = Notification.requestPermission();

//const greeting = new Notification('Hi, How are you?');
// const greeting = new Notification('Hi, How are you?',{body: 'Have a good day',icon: ''});
// create and show the notification
/* const showNotification = () => {
    // create a new notification
    const notification = new Notification('JavaScript', 
    {
        body: 'This is a JavaScript Notification API demo',
        icon: './img/js.png',
        vibrate: true
    });

    // close the notification after 10 seconds
    setTimeout(() => {
        notification.close();
    }, 10 * 1000);

    // navigate to a URL
    notification.addEventListener('click', () => {
        window.open('https://www.javascripttutorial.net/web-apis/javascript-notification/', '_blank');
    });
}*/

//ServiceWorkerRegistration.showNotification();