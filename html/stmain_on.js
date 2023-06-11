let alldoc = document.getElementsByClassName('alldoc');
let stud = document.getElementsByClassName('stud');
let studdiv = document.getElementsByClassName('studdiv');
let singout = document.getElementsByClassName('singout');
let closestu = document.getElementsByClassName('closestu');
let dialog = document.getElementsByClassName('dialog');
let dialogdiv = document.getElementsByClassName('dialogdiv');
let closedia = document.getElementsByClassName('closedia');
let nava = document.querySelectorAll('nav a');

nava[0].onclick = function(){
  if(window.navigator.onLine == true){
    nava[0].href = 'stmain_on.html';
  }
  else {
    alert('أنت غير متصل بالانترنت\n قد تكون بعض المعلومات غير محدثة');
    nava[0].removeAttribute('href');
    var hislen = history.length;
    hislen = hislen - 1;
    window.history.go(-hislen);
  }
}
nava[1].onclick = function(){
  if(window.navigator.onLine == true){
    nava[1].href = 'stud_noti_on.html';
  }
  else {
    alert('أنت غير متصل بالانترنت\n قد تكون بعض المعلومات غير محدثة');
    nava[1].removeAttribute('href');
    var hislen = history.length;
    hislen = hislen - 1;
    window.history.go(-hislen);
  }
}
nava[2].onclick = function(){
  if(window.navigator.onLine == true){
    nava[2].href = 'stud_poin_on.html';
  }
  else {
    alert('أنت غير متصل بالانترنت\n قد تكون بعض المعلومات غير محدثة');
    nava[2].removeAttribute('href');
    var hislen = history.length;
    hislen = hislen - 1;
    window.history.go(-hislen);
  }
}
nava[3].onclick = function(){
  if(window.navigator.onLine == true){
    nava[3].href = 'stud_pres_on.html';
  }
  else {
    alert('أنت غير متصل بالانترنت\n قد تكون بعض المعلومات غير محدثة');
    nava[3].removeAttribute('href');
    var hislen = history.length;
    hislen = hislen - 1;
    window.history.go(-hislen);
  }
}
nava[4].onclick = function(){
  if(window.navigator.onLine == true){
    nava[4].href = 'stud_rate_on.html';
  }
  else {
    alert('أنت غير متصل بالانترنت\n قد تكون بعض المعلومات غير محدثة');
    nava[4].removeAttribute('href');
    var hislen = history.length;
    hislen = hislen - 1;
    window.history.go(- hislen);
  }
}

stud[0].onclick = function(){
  alldoc[0].style = 'display: block;';
  studdiv[0].style = 'right: 0;';
}
singout[0].onclick = function(){
  var siout = confirm("هل تريد الخروج ؟؟");
  if(siout == true){
    var hislen = history.length;
    hislen = hislen - 1;
    window.history.go(-hislen);
    var time = setTimeout(function(){
      window.history.replaceState({},'',"accounts.html");
      window.location.href = "accounts.html";
    },3000);
  }
}
closestu[0].onclick = function(){
  studdiv[0].style = 'right: -100%;';
  alldoc[0].style = 'display: none;';
}
dialog[0].onclick = function(){
  dialogdiv[0].style = 'top: 0;';
  alldoc[0].style = 'display: block;';
}
closedia[0].onclick = function(){
  dialogdiv[0].style = 'top: -100%;';
  alldoc[0].style = 'display: none;';
}

let id = localStorage.id;
let myid = localStorage.lmyid.split(',');
let indexvar = myid.indexOf(id);
let myname = localStorage.lmyname.split(',');
let mydate = localStorage.lmydate.split(',');
let myfather = localStorage.lmyfather.split(',');
let mylive = localStorage.lmylive.split(',');
let mysave = localStorage.lmysave.split(',');
let myphon = localStorage.lmyphon.split(',');

let studna = document.getElementsByClassName('studna');
let studda = document.getElementsByClassName('studda');
let studfa = document.getElementsByClassName('studfa');
let studli = document.getElementsByClassName('studli');
let studsa = document.getElementsByClassName('studsa');
let studph = document.getElementsByClassName('studph');

studna[0].textContent = myname[indexvar];
studna[1].textContent = myname[indexvar];
studda[0].textContent = mydate[indexvar];
studfa[0].textContent = myfather[indexvar];
studli[0].textContent = mylive[indexvar];
studsa[0].textContent = mysave[indexvar];
studph[0].textContent = myphon[indexvar];

let stud_name = myname[indexvar];
let allday = [];
let stud_pres = [];
let stud_poin = [];
let stud_noit = [];
let stud_rate_n = [];
let stud_rate_p = [];
let oldnotiarr = [];
let oldnoti = 0;
let stnam_key;
let stnam_value;
let studindex;
let studchar;

let studdata;
/* set up XMLHttpRequest */
//var url = "../studA.xlsx";
var onel = localStorage.id[0];
if(onel == 'A'){
  //var url = "../studda2A.xlsx";
  var url = "https://docs.google.com/spreadsheets/d/1Ci1vTdWaTj885QjnlELWYWv9lbd4eg1J/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'B'){
  var url = "https://docs.google.com/spreadsheets/d/1m2wMB1_tYABfwCKKWpeEZhwXeVoOrWb6/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'C'){
  var url = "https://docs.google.com/spreadsheets/d/1nprs-4gkw0vF8PYgy73sbUojv9dZ9R8g/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'D'){
  var url = "https://docs.google.com/spreadsheets/d/1iBhYvimr8AuUARYygUk5XqywAiWlwrw_/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'E'){
  var url = "https://docs.google.com/spreadsheets/d/17ElKN6aDdOOyrFn5SDpB50lM-B_A5-yw/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'F'){
  var url = "https://docs.google.com/spreadsheets/d/1YoVz_N3iOlktXNlTELN4uTX3T05dw5eZ/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'G'){
  var url = "https://docs.google.com/spreadsheets/d/1e9WIhyzW5vdc6AYkUFGaAZtBUpbHPBO1/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'H'){
  var url = "https://docs.google.com/spreadsheets/d/1WpgtpIectvydO8mhRIoXSHy9_KrvBufi/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";
oReq.onload = function(e) {
  var arraybuffer = oReq.response;
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");
  var workbook = XLSX.read(bstr, {type:"binary"});
  var first_sheet_name = workbook.SheetNames[0];
  var worksheet = workbook.Sheets[first_sheet_name];
  studdata = XLSX.utils.sheet_to_json(worksheet,{raw:true});
  //console.log(studdata);
  for(let m in studdata){
    if(Object.keys(studdata[m]).length <= 3){
      break;
    }
    if(studdata[m]['A'] != undefined){
      stnam_key = Object.keys(studdata[m]);
      stnam_value = Object.values(studdata[m]);
      if( m == '0'){
        stud_rate_n = Object.values(studdata[m]);
        studindex = stnam_value.indexOf(stud_name);
        studchar = stnam_key[studindex];
        //console.log(studchar);
      }
      allday.push(stnam_value[1]);
      stud_pres.push(stnam_value[studindex]);
    }
    else {
      //stnam_key = Object.keys(studdata[m]);
      //stnam_value = Object.values(studdata[m]);
      //console.log(stnam_key);
      //console.log(stnam_value);
      
      if(studdata[m]['B'] == "النقاط"){
        stud_poin.push(studdata[m][studchar]);
      }
      if(studdata[m]['B'] == "ملاحظات"){
        stud_noit.push(studdata[m][studchar]);
      }
    }
  }
  allday.shift();
  stud_pres.shift();
  //console.log(stud_poin);
  //console.log(stud_noit);
  
  let stud_rate = studdata[studdata.length - 2];
  stud_rate_p = Object.values(stud_rate);
  stud_rate_n.shift();
  stud_rate_n.shift();
  stud_rate_n.shift();
  stud_rate_p.shift();
  stud_rate_p.shift();
  //console.log(stud_rate_n);
  //console.log(stud_rate_p);
  var highpoin;
  var tempnam;
  var temppoin;
  
  for(var a=0; a<stud_rate_p.length-1; a++){
    highpoin = stud_rate_p[a];
    for(var b=a+1; b < stud_rate_p.length; b++){
      if(stud_rate_p[b]>highpoin){
        highpoin = stud_rate_p[b];
        temppoin = stud_rate_p[a];
        stud_rate_p[a] = stud_rate_p[b];
        stud_rate_p[b] = temppoin;
        tempnam = stud_rate_n[a];
        stud_rate_n[a] = stud_rate_n[b];
        stud_rate_n[b] = tempnam;
      }
      if(stud_rate_p[b]==highpoin){
        temppoin = stud_rate_p[a+1];
        stud_rate_p[a+1] = stud_rate_p[b];
        stud_rate_p[b] = temppoin;
        tempnam = stud_rate_n[a+1];
        stud_rate_n[a+1] = stud_rate_n[b];
        stud_rate_n[b] = tempnam;
      }
    }
  }

  let stud_name2 = [];
  let allday2 = [];
  let stud_poin2 = [];
  let stud_pres2 = [];
  let stud_noit2 = [];
  let stud_rate_n2 = [];
  let stud_rate_p2 = [];
  let allday3;
  let stud_poin3;
  let stud_pres3;
  let stud_noit3;
  let stud_rate_n3;
  let stud_rate_p3;
  let bigarr;
  if(localStorage.lbigarr == undefined){
    stud_name2.push(stud_name);
    localStorage.lstud_name = stud_name2;
    localStorage.lallday = allday + '*';
    localStorage.lstud_poin = stud_poin + '*';
    localStorage.lstud_pres = stud_pres + '*';
    localStorage.lstud_noit = stud_noit + '*';
    
    localStorage.lstud_rate_n = stud_rate_n + '*';
    localStorage.lstud_rate_p = stud_rate_p + '*';
    
    oldnoti = stud_noit.length;
    oldnotiarr.push(oldnoti);
    localStorage.loldnoti = oldnotiarr;
    localStorage.lnewnotnum = oldnoti;
    if(oldnoti != 0){
      var newnot = document.getElementsByClassName('newnot');
      newnot[0].style.display = 'block';
      newnot[0].innerHTML = oldnoti;
    }
    localStorage.lbigarr = 1;
  }
  else {
    stud_name2 = localStorage.lstud_name.split(',');
    var bigarrvar = false;
    for(let b in stud_name2){
      if(stud_name == stud_name2[b]){
        allday2 = localStorage.lallday.split('*');
        stud_poin2 = localStorage.lstud_poin.split('*');
        stud_pres2 = localStorage.lstud_pres.split('*');
        stud_noit2 = localStorage.lstud_noit.split('*');
        
        stud_rate_n2 = localStorage.lstud_rate_n .split('*');
        stud_rate_p2 = localStorage.lstud_rate_p.split('*');
        
        oldnotiarr = localStorage.loldnoti.split(',');
        var oldnoti2 = Number(oldnotiarr[b]);
        
        if(stud_noit.length - oldnoti2 != 0){
          if(stud_noit.length - oldnoti2 < 0){
            oldnoti = stud_noit.length;
          }
          else {
            oldnoti = stud_noit.length - oldnoti2;
          }
          //console.log(oldnoti);
          oldnotiarr[b] = stud_noit.length;
          localStorage.loldnoti = oldnotiarr;
          if(oldnoti != 0){
            var newnot = document.getElementsByClassName('newnot');
            newnot[0].style.display = 'block';
            newnot[0].innerHTML = oldnoti;
            localStorage.lnewnotnum = oldnoti;
          }
        }
        
        stud_name2[b] = stud_name;
        allday2[b] = allday;
        stud_poin2[b] = stud_poin;
        stud_pres2[b] = stud_pres;
        stud_noit2[b] = stud_noit;
        stud_rate_n2[b] = stud_rate_n;
        stud_rate_p2[b] = stud_rate_p;
        if(allday2[allday2.length - 1] == ''){
          allday2.pop();
          stud_poin2.pop();
          stud_pres2.pop();
          stud_noit2.pop();
          stud_rate_n2.pop();
          stud_rate_p2.pop();
        }
        allday3 = allday2.join('*');
        stud_poin3 = stud_poin2.join('*');
        stud_pres3 = stud_pres2.join('*');
        stud_noit3 = stud_noit2.join('*');
        stud_rate_n3 = stud_rate_n2.join('*');
        stud_rate_p3 = stud_rate_p2.join('*');
        localStorage.lstud_name = stud_name2;
        localStorage.lallday = allday3;
        localStorage.lstud_poin = stud_poin3;
        localStorage.lstud_pres = stud_pres3;
        localStorage.lstud_noit = stud_noit3;
        localStorage.lstud_rate_n = stud_rate_n3;
        localStorage.lstud_rate_p = stud_rate_p3;
        bigarrvar = true;
        break;
      }
    }
    if(bigarrvar == false) {
      allday2 = localStorage.lallday.split('*');
      stud_poin2 = localStorage.lstud_poin.split('*');
      stud_pres2 = localStorage.lstud_pres.split('*');
      stud_noit2 = localStorage.lstud_noit.split('*');
      stud_rate_n2 = localStorage.lstud_rate_n.split('*');
      stud_rate_p2 = localStorage.lstud_rate_p.split('*');
      if(allday2[allday2.length - 1] == ''){
        allday2.pop();
        stud_poin2.pop();
        stud_pres2.pop();
        stud_noit2.pop();
        stud_rate_n2.pop();
        stud_rate_p2.pop();
      }
      stud_name2.push(stud_name);
      allday2.push(allday);
      stud_poin2.push(stud_poin);
      stud_pres2.push(stud_pres);
      stud_noit2.push(stud_noit);
      stud_rate_n2.push(stud_rate_n);
      stud_rate_p2.push(stud_rate_p);
      allday3 = allday2.join('*');
      stud_poin3 = stud_poin2.join('*');
      stud_pres3 = stud_pres2.join('*');
      stud_noit3 = stud_noit2.join('*');
      stud_rate_n3 = stud_rate_n2.join('*');
      stud_rate_p3 = stud_rate_p2.join('*');
      localStorage.lstud_name = stud_name2;
      localStorage.lallday = allday3;
      localStorage.lstud_poin = stud_poin3;
      localStorage.lstud_pres = stud_pres3;
      localStorage.lstud_noit = stud_noit3;
      localStorage.lstud_rate_n = stud_rate_n3;
      localStorage.lstud_rate_p = stud_rate_p3;
      oldnotiarr = localStorage.loldnoti.split(',');
      oldnoti = stud_noit.length;
      oldnotiarr.push(oldnoti);
      localStorage.loldnoti = oldnotiarr;
      if(oldnoti != 0){
        var newnot = document.getElementsByClassName('newnot');
        newnot[0].style.display = 'block';
        newnot[0].innerHTML = oldnoti;
      }
      localStorage.lnewnotnum = oldnoti;
      bigarr = Number(localStorage.lbigarr);
      bigarr++;
      localStorage.lbigarr = bigarr;
    }
  }
}
oReq.send(); 
/*
var offdiv = document.getElementsByClassName('offdiv');
var myonline2;
var myonline = setInterval(fmyonline,5000);
function fmyonline(){
  if(window.navigator.onLine == false){
    offdiv[0].style.display = 'block';
    clearInterval(myonline);
    myonline2 = setTimeout(function(){
      window.history.back();
    },2000);
  }
}
*/
localStorage.pageupdate = 'y';