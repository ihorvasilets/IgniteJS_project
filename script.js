//-----------------------------------------------------------------------------
//----- RESPONSIVE-MENU --------------------------------------------------------

window.onload = function () {

    var menuButton = document.querySelectorAll('.header-bg button')[0];
    var respMenu = document.querySelectorAll('.header-bg ul')[0];
    var menuCounter = 0;

    window.addEventListener('resize', function () {
        if(document.documentElement.clientWidth >= 768){
            menuCounter = 1;
            respMenu.style.display = 'block';
        }
        else{
            menuCounter = 0;
            respMenu.style.display = 'none';
        }
    });

    menuButton.addEventListener('click', function(){
        if(!menuCounter){
            respMenu.style.display = 'block';
            menuCounter = !menuCounter;
        }
        else{
            respMenu.style.display = 'none';
            menuCounter = !menuCounter;
        }
    })


//-----------------------------------------------------------------------------
//----- SCROLL ----------------------------------------------------------------

    var navMenu = document.querySelectorAll('header ul li');
    var toServices = document.querySelectorAll('section.services');
    var toWork = document.querySelectorAll('section.works');
    var toAbout = document.querySelectorAll('section.about');
    var toClients = document.querySelectorAll('section.clients');
    var toContact = document.querySelectorAll('section.contacts');

    function scrollUp(from, to){
        var timerUp = setInterval(function(){
            window.scrollTo(0, from);
            from -= 20;
            if (from <= (to - 50)){
                clearInterval(timerUp);
            }
        })
    }

    function scrollDown(from, to){
        var timerDown = setInterval(function(){
            window.scrollTo(0, from);
            from += 20;
            if (from >= (to - 30)){
                clearInterval(timerDown);
            }
        })
    }

    navMenu[0].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        scrollUp(currentScroll, 0);
    });

    navMenu[1].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        var targetObject = toServices[0].getBoundingClientRect();
        var target = targetObject.top + currentScroll;

        if(currentScroll >= target){
            scrollUp(currentScroll, target);
        }
        else{
            scrollDown(currentScroll, target);
        }
    });

    navMenu[2].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        var targetObject = toWork[0].getBoundingClientRect();
        var target = targetObject.top + currentScroll;

        if(currentScroll >= target){
            scrollUp(currentScroll, target);
        }
        else{
            scrollDown(currentScroll, target);
        }
    });

    navMenu[3].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        var targetObject = toAbout[0].getBoundingClientRect();
        var target = targetObject.top + currentScroll;

        if(currentScroll >= target){
            scrollUp(currentScroll, target);
        }
        else{
            scrollDown(currentScroll, target);
        }
    });

    navMenu[4].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        var targetObject = toClients[0].getBoundingClientRect();
        var target = targetObject.top + currentScroll;

        if(currentScroll >= target){
            scrollUp(currentScroll, target);
        }
        else{
            scrollDown(currentScroll, target);
        }
    });

    navMenu[5].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        var targetObject = toContact[0].getBoundingClientRect();
        var target = targetObject.top + currentScroll;

        if(currentScroll >= target){
            scrollUp(currentScroll, target);
        }
        else{
            scrollDown(currentScroll, target);
        }
    });

// --do you like our portfolio
    var likeButtons = document.querySelectorAll('.achievements .like button');

    likeButtons[0].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        var targetObject = toContact[0].getBoundingClientRect();
        var target = targetObject.top + currentScroll;

        scrollDown(currentScroll, target);
    });

    likeButtons[1].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        var targetObject = toContact[0].getBoundingClientRect();
        var target = targetObject.top + currentScroll;

        scrollDown(currentScroll, target);
    });

// --footer
    var upButton = document.querySelectorAll('footer #up')[0];

    upButton.addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        scrollUp(currentScroll, 0);
    });
//-----------------------------------------------------------------------------
//----- SLIDER ---------------------------------------------------------------

    var slideData = [];
    slideData[1] = "BRANDING HAVE ANOTHER DEFINITION";
    slideData[2] =  "Lorem ipsum dolor sit amet";
    slideData[3] =  "MAECENAS NON ELIT VEL SAPIEN VIVERRA";

    var i = 1;

    var slideButton = document.querySelectorAll(".slider button");
    var slideText = document.querySelectorAll(".slider h1")[0];
    var slide = document.getElementsByClassName("slider")[0];


    function autoslide() {
        if (i <= 3){

            slide.style.backgroundImage = "url(images/slider/slide"+i+".jpg)";
            slideText.innerHTML = slideData[i];
            i++;
        }
        else {
            i = 1;
            slide.style.backgroundImage = "url(images/slider/slide"+i+".jpg)";
            slideText.innerHTML = slideData[i];
            i++;
        }
    }

    var autosl = setInterval(autoslide, 3000);

    function resume() {	}

    slideButton[0].onclick = function(e){
        if (!e) e = window.event;

        if (i>=2){
            clearInterval(autosl);
            i--;
            slide.style.backgroundImage = "url(images/slider/slide"+i+".jpg)";
            slideText.innerHTML = slideData[i];
            setTimeout(resume, 2000);
            autosl = setInterval(autoslide, 3000);
        }

        else {
            clearInterval(autosl);
            i = 3;
            slide.style.backgroundImage = "url(images/slider/slide"+i+".jpg)";
            slideText.innerHTML = slideData[i];
            setTimeout(resume, 2000);
            autosl = setInterval(autoslide, 3000);
        }
    }

    slideButton[2].onclick = function(e){
        if (!e) e = window.event;

        if (i<=2){
            clearInterval(autosl);
            i++;
            slide.style.backgroundImage = "url(images/slider/slide"+i+".jpg)";
            slideText.innerHTML = slideData[i];
            setTimeout(resume, 2000);
            autosl = setInterval(autoslide, 3000);

        }

        else {
            clearInterval(autosl);
            i = 1;
            slide.style.backgroundImage = "url(images/slider/slide"+i+".jpg)";
            slideText.innerHTML = slideData[i];
            setTimeout(resume, 2000);
            autosl = setInterval(autoslide, 3000);
        }
    }


//-----------------------------------------------------------------------------
//-----SERVICES---------------------------------------------------------------

    var services = document.querySelectorAll(".services .departments .department");

    for (var j = 0; j < services.length; j++){

        services[j].onmouseover = function(){
            this.style.height = "114px";
            this.style.width = "114px";
            this.style.borderRadius = "57px";
            this.style.backgroundSize = "44%"
            this.style.marginTop = '40px';

        }

        services[j].onmouseleave = function(){
            this.style.height = "104px";
            this.style.width = "104px";
            this.style.borderRadius = "52px";
            this.style.backgroundSize = "40%";
            this.style.marginTop = '50px';

        }

    }


//-----------------------------------------------------------------------------
//-----HOW WE DO---------------------------------------------------------------

    var howWeDo = document.querySelectorAll(".how-we-do .stages .stage");

    for (var j = 0; j < howWeDo.length; j++){

        howWeDo[j].onmouseover = function(){
            this.style.height = "55px";
            this.style.width = "55px";
            this.style.backgroundSize = "105%";

        }

        howWeDo[j].onmouseleave = function(){
            this.style.height = "45px";
            this.style.width = "45px";
            this.style.backgroundSize = "94%";
        }

    }




//-----------------------------------------------------------------------------
//-----ABOUT US---------------------------------------------------------------

    var about = document.querySelectorAll(".about .description .icon");

    for (var j = 0; j < about.length; j++){

        about[j].onmouseover = function(){
            this.style.height = "77px";
            this.style.width = "77px";
            this.style.borderRadius = "39px";
            this.style.top = '7px';

        }

        about[j].onmouseleave = function(){
            this.style.height = "70px";
            this.style.width = "70px";
            this.style.borderRadius = "35px";
            this.style.top = '10px';

        }

    }

//-----------------------------------------------------------------------------
//-----PORTFOLIO---------------------------------------------------------------

    var yellow = document.querySelectorAll(".works .preview .yellow");
    var portfolio = document.querySelectorAll('.works .preview .portfolio');
    var length = portfolio.length;

    for(var o = 0; o < length; o++){
        portfolio[o].addEventListener('mouseover',
            function () {
                this.children[0].style.display = 'block';
            });
        portfolio[o].addEventListener('mouseleave',
            function () {
                this.children[0].style.display = 'none';
            });
    }
//--- filter ---------

    var filterButtons = document.querySelectorAll('.works .filter li span');
    var allWorks = document.querySelectorAll('.works .preview .portfolio');
    filterButtons[0].style.color = '#ffe600';

        filterButtons[0].onclick = function(){
            this.style.color = '#ffe600';
            filterButtons[1].style.color = filterButtons[2].style.color = filterButtons[3].style.color = filterButtons[4].style.color = '#515151';
            for(var i = 0; i < length; i++){
                allWorks[i].style.display = 'block';
                yellow[i].style.display = 'none';
            }
        }

        filterButtons[1].onclick = function(){
            this.style.color = '#ffe600';
            filterButtons[0].style.color = filterButtons[2].style.color = filterButtons[3].style.color = filterButtons[4].style.color = '#515151';

            var webWorks = document.querySelectorAll('.works .preview .web-design');
            for(var i = 0; i < length; i++){
                allWorks[i].style.display = 'none';
            }
            for(var j = 0; j < webWorks.length; j++){
                webWorks[j].style.display = 'block';
            }
            for(var l = 0; l < length; l++){
                yellow[l].style.display = 'none';
            }
        }
        filterButtons[2].onclick = function(){
            this.style.color = '#ffe600';
            filterButtons[0].style.color = filterButtons[1].style.color = filterButtons[3].style.color = filterButtons[4].style.color = '#515151';

            var graphWorks = document.querySelectorAll('.works .preview .graphic-design');
            for(var i = 0; i < length; i++){
                allWorks[i].style.display = 'none';
            }
            for(var j = 0; j < graphWorks.length; j++){
                graphWorks[j].style.display = 'block';
            }
            for(var l = 0; l < length; l++){
                yellow[l].style.display = 'none';
            }
        }
        filterButtons[3].onclick = function(){
            this.style.color = '#ffe600';
            filterButtons[0].style.color = filterButtons[1].style.color = filterButtons[2].style.color = filterButtons[4].style.color = '#515151';

            var photoWorks = document.querySelectorAll('.works .preview .photography');
            for(var i = 0; i < length; i++){
                allWorks[i].style.display = 'none';
            }
            for(var j = 0; j < photoWorks.length; j++){
                photoWorks[j].style.display = 'block';
            }
            for(var l = 0; l < length; l++){
                yellow[l].style.display = 'none';
            }
        }
        filterButtons[4].onclick = function(){
            this.style.color = '#ffe600';
            filterButtons[0].style.color = filterButtons[1].style.color = filterButtons[2].style.color = filterButtons[3].style.color = '#515151';

            var illustWorks = document.querySelectorAll('.works .preview .illustration');
            for(var i = 0; i < length; i++){
                allWorks[i].style.display = 'none';
            }
            for(var j = 0; j < illustWorks.length; j++){
                illustWorks[j].style.display = 'block';
            }
            for(var l = 0; l < length; l++){
                yellow[l].style.display = 'none';
            }
        }


//-----------------------------------------------------------------------------
//----- COUNTERS --------------------------------------------------------------

    var countersMain = document.querySelectorAll('.achievements .counters h2');
   // var divCount = document.getElementsByClassName("proud")[0];
    //var countNumbers = document.querySelectorAll(".coun h4");

    document.addEventListener('scroll', function startCounters() {
        var startCounting = countersMain[0].getBoundingClientRect().top;

        if(window.pageYOffset >= (startCounting + window.pageYOffset - document.documentElement.clientHeight + 70)) {
            document.removeEventListener('scroll', startCounters);

            var counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0;

            var countNum1 = setInterval(function () {
                counter1 += 5;
                countersMain[0].innerHTML = counter1;

                if (counter1 >= 1600) {
                    clearInterval(countNum1);
                    countersMain[0].innerHTML = 1600;
                }
            }, 10);

            var countNum2 = setInterval(function () {
                counter2 += 5;
                countersMain[1].innerHTML = counter2;

                if (counter2 >= 3200) {
                    clearInterval(countNum2);
                    countersMain[1].innerHTML = 3200;
                }
            }, 5);


            var countNum3 = setInterval(function () {
                counter3++;
                countersMain[2].innerHTML = counter3;

                if (counter3 >= 40) {
                    clearInterval(countNum3);
                    countersMain[2].innerHTML = 40;
                }
            }, 75);


            var countNum4 = setInterval(function () {
                counter4 += 40;
                countersMain[3].innerHTML = counter4;

                if (counter4 >= 20000) {
                    clearInterval(countNum4);
                    countersMain[3].innerHTML = 20000;
                }
            }, 6);

        } });


//-----------------------------------------------------------------------------
//----- THE TEAM --------------------------------------------------------------

    var team = document.querySelectorAll(".team .members .member");
    var names = document.querySelectorAll(".team .members h4");
    var namesOccup = document.querySelectorAll(".team .members h5");
    var labels = document.getElementsByClassName('lab');

    var james = document.getElementById("james");
    var eric = document.getElementById("eric");
    var marina = document.getElementById("marina");
    var koji = document.getElementById("koji");

    team[0].onclick = names[0].onclick = namesOccup[0].onclick = function(){
        james.style.display = "block";
        labels[0].style.display = "block";
        eric.style.display = marina.style.display = koji.style.display = "none";
        labels[1].style.display = labels[2].style.display = labels[3].style.display = "none";
        draw1(90);
        draw2(96);
        draw3(85);
        draw4(94);
    }

    team[1].onclick = names[1].onclick = namesOccup[1].onclick = function(){
        eric.style.display = "block";
        labels[1].style.display = "block";
        james.style.display = marina.style.display = koji.style.display = "none";
        labels[0].style.display = labels[2].style.display = labels[3].style.display = "none";
        draw1(85);
        draw2(90);
        draw3(79);
        draw4(91);
    }

    team[2].onclick = names[2].onclick = namesOccup[2].onclick = function(){
        marina.style.display = "block";
        labels[2].style.display = "block";
        james.style.display = eric.style.display = koji.style.display = "none";
        labels[0].style.display = labels[1].style.display = labels[3].style.display = "none";
        draw1(92);
        draw2(88);
        draw3(90);
        draw4(70);
    }

    team[3].onclick = names[3].onclick = namesOccup[3].onclick = function(){
        koji.style.display = "block";
        labels[3].style.display = "block";
        james.style.display = eric.style.display = marina.style.display = "none";
        labels[0].style.display = labels[1].style.display = labels[2].style.display = "none";
        draw1(84);
        draw2(94);
        draw3(70);
        draw4(97);
    }




///-----------------------------------------------------------------------------
//----- SKILLS -----------------------------------------------------------------

//---Common data canvas
    var canvas1 = document.getElementById("canvas1");
    var startCanvasArea = document.querySelectorAll(".team .info-bottom")[0];
    var W = canvas1.width;
    var H = canvas1.height;


    var color = "#ffe600";
    var bgcolor = "white";

//---First canvas
    var ctx1 = canvas1.getContext("2d");

    var degrees1 = 0;

    function init1(){

        ctx1.clearRect(0, 0, W, H);

        ctx1.beginPath();
        ctx1.strokeStyle = bgcolor;
        ctx1.lineWidth = 3;
        ctx1.arc(W/2, H/2, 62, 0, Math.PI*2, false); //you can see the arc now
        ctx1.stroke();

        var radians1 = degrees1 * Math.PI / 180;

        ctx1.beginPath();
        ctx1.strokeStyle = color;
        ctx1.lineWidth = 3;
        ctx1.arc(W/2, H/2, 62, 0-(90 * Math.PI / 180), radians1-(90 * Math.PI / 180), false); //you can see the arc now
        ctx1.stroke();

        ctx1.fillStyle = color;
        ctx1.font = "30px impact";

        text = Math.floor(degrees1/360*100) + "%";

        text_width = ctx1.measureText(text).width;
        ctx1.fillText(text, W/2 - text_width/2, H/2 + 12);
    }


    function draw1(targ){

        targDegrees1 = targ;
        targDegrees1 = targDegrees1*360/100;

        animation_loop1 = setInterval(animate1, 1000/targDegrees1);
    }

    function animate1(){
        degrees1++;

        if(degrees1 >= targDegrees1)
            clearInterval(animation_loop1);

        init1();

        if(degrees1 >= targDegrees1)
        	degrees1 = 0;
    }


//---Second canvas

    var canvas2 = document.getElementById("canvas2");
    var ctx2 = canvas2.getContext("2d");

    var degrees2 = 0;
    //var text1 = "0%";

    function init2(){

        ctx2.clearRect(0, 0, W, H);

        ctx2.beginPath();
        ctx2.strokeStyle = bgcolor;
        ctx2.lineWidth = 3;
        ctx2.arc(W/2, H/2, 62, 0, Math.PI*2, false); //you can see the arc now
        ctx2.stroke();

        var radians2 = degrees2 * Math.PI / 180;

        ctx2.beginPath();
        ctx2.strokeStyle = color;
        ctx2.lineWidth = 3;
        ctx2.arc(W/2, H/2, 62, 0-(90 * Math.PI / 180), radians2-(90 * Math.PI / 180), false); //you can see the arc now
        ctx2.stroke();

        ctx2.fillStyle = color;
        ctx2.font = "30px impact";

        text = Math.floor(degrees2/360*100) + "%";

        text_width = ctx2.measureText(text).width;
        ctx2.fillText(text, W/2 - text_width/2, H/2 + 12);
    }


    function draw2(targ){

        targDegrees2 = targ;
        targDegrees2 = targDegrees2*360/100;

        animation_loop2 = setInterval(animate2, 1000/targDegrees2);
    }


    function animate2(){
        degrees2++;

        if(degrees2 >= targDegrees2)
            clearInterval(animation_loop2);

        init2();

        if(degrees2 >= targDegrees2)
            degrees2 = 0;
    }


//---Third canvas

    var canvas3 = document.getElementById("canvas3");
    var ctx3 = canvas3.getContext("2d");

    var degrees3 = 0;

    function init3(){

        ctx3.clearRect(0, 0, W, H);

        ctx3.beginPath();
        ctx3.strokeStyle = bgcolor;
        ctx3.lineWidth = 3;
        ctx3.arc(W/2, H/2, 62, 0, Math.PI*2, false); //you can see the arc now
        ctx3.stroke();

        var radians3 = degrees3 * Math.PI / 180;

        ctx3.beginPath();
        ctx3.strokeStyle = color;
        ctx3.lineWidth = 3;
        ctx3.arc(W/2, H/2, 62, 0-(90 * Math.PI / 180), radians3-(90 * Math.PI / 180), false); //you can see the arc now
        ctx3.stroke();

        ctx3.fillStyle = color;
        ctx3.font = "30px impact";

        text = Math.floor(degrees3/360*100) + "%";

        text_width = ctx3.measureText(text).width;
        ctx3.fillText(text, W/2 - text_width/2, H/2 + 12);
    }


    function draw3(targ){

        targDegrees3 = targ;
        targDegrees3 = targDegrees3*360/100;

        animation_loop3 = setInterval(animate3, 1000/targDegrees3);
    }


    function animate3(){
        degrees3++;

        if(degrees3 >= targDegrees3)
            clearInterval(animation_loop3);

        init3();

        if(degrees3 >= targDegrees3)
            degrees3 = 0;
    }


//---Fourth canvas

    var canvas4 = document.getElementById("canvas4");
    var ctx4 = canvas4.getContext("2d");

    var degrees4 = 0;

    function init4(){

        ctx4.clearRect(0, 0, W, H);

        ctx4.beginPath();
        ctx4.strokeStyle = bgcolor;
        ctx4.lineWidth = 3;
        ctx4.arc(W/2, H/2, 62, 0, Math.PI*2, false); //you can see the arc now
        ctx4.stroke();

        var radians4 = degrees4 * Math.PI / 180;

        ctx4.beginPath();
        ctx4.strokeStyle = color;
        ctx4.lineWidth = 3;
        ctx4.arc(W/2, H/2, 62, 0-(90 * Math.PI / 180), radians4-(90 * Math.PI / 180), false); //you can see the arc now
        ctx4.stroke();

        ctx4.fillStyle = color;
        ctx4.font = "30px impact";

        text = Math.floor(degrees4/360*100) + "%";

        text_width = ctx4.measureText(text).width;
        ctx4.fillText(text, W/2 - text_width/2, H/2 + 12);
    }


    function draw4(targ){

        targDegrees4 = targ;
        targDegrees4 = targDegrees4*360/100;

        animation_loop4 = setInterval(animate4, 1000/targDegrees4);
    }


    function animate4(){
        degrees4++;

        if(degrees4 >= targDegrees4)
            clearInterval(animation_loop4);

        init4();

        if(degrees4 >= targDegrees4)
            degrees4 = 0;
    }

//---Canvas init
    ctx1.beginPath();
    ctx1.strokeStyle = bgcolor;
    ctx1.lineWidth = 3;
    ctx1.arc(W/2, H/2, 62, 0, Math.PI*2, false); //you can see the arc now
    ctx1.stroke();

    ctx1.fillStyle = color;
    ctx1.font = "30px impact";
    text = "0%";
    text_width = ctx1.measureText(text).width;
    ctx1.fillText(text, W/2 - text_width/2, H/2 + 12);

    ctx2.beginPath();
    ctx2.strokeStyle = bgcolor;
    ctx2.lineWidth = 3;
    ctx2.arc(W/2, H/2, 62, 0, Math.PI*2, false); //you can see the arc now
    ctx2.stroke();

    ctx2.fillStyle = color;
    ctx2.font = "30px impact";
    text = "0%";
    text_width = ctx2.measureText(text).width;
    ctx2.fillText(text, W/2 - text_width/2, H/2 + 12);

    ctx3.beginPath();
    ctx3.strokeStyle = bgcolor;
    ctx3.lineWidth = 3;
    ctx3.arc(W/2, H/2, 62, 0, Math.PI*2, false); //you can see the arc now
    ctx3.stroke();

    ctx3.fillStyle = color;
    ctx3.font = "30px impact";
    text = "0%";
    text_width = ctx3.measureText(text).width;
    ctx3.fillText(text, W/2 - text_width/2, H/2 + 12);

    ctx4.beginPath();
    ctx4.strokeStyle = bgcolor;
    ctx4.lineWidth = 3;
    ctx4.arc(W/2, H/2, 62, 0, Math.PI*2, false); //you can see the arc now
    ctx4.stroke();

    ctx4.fillStyle = color;
    ctx4.font = "30px impact";
    text = "0%";
    text_width = ctx4.measureText(text).width;
    ctx4.fillText(text, W/2 - text_width/2, H/2 + 12);



    document.addEventListener('scroll', function startCanvas() {
        var startCan = startCanvasArea.getBoundingClientRect().top;

        if(window.pageYOffset >= (startCan + window.pageYOffset - document.documentElement.clientHeight + 150)) {
            document.removeEventListener('scroll', startCanvas);

            draw1(90);
            draw2(96);
            draw3(85);
            draw4(94);
        }
    });





//------------------------------------------------------------------------------
//----- CLIENTS ----------------------------------------------------------------

    var companies = [];

    companies[0] = '<div><img src="images/clients-half.png" alt="half"><img></div>';
    companies[1] = '<div><img src="images/clients-jupiter.png" alt="jupiter"><img></div>';
    companies[2] = '<div><img src="images/clients-mars.png" alt="mars"><img></div>';
    companies[3] = '<div><img src="images/clients-moonpic.png" alt="moonpic"><img></div>';
    companies[4] = '<div><img src="images/clients-rocket.png" alt="rocket"><img></div>';

    var outComp = document.querySelectorAll(".clients .list div")[0];

    function compScroll() {
        var buf = companies[4];
        companies.unshift(buf);
        companies.pop();
        var compString = companies.join("");

        outComp.innerHTML = compString;
    }
    setInterval(compScroll, 3000);






//------------------------------------------------------------------------------
//----- REVIEWS ----------------------------------------------------------------

    var review = document.getElementById("review");
    var author = document.getElementById("author");
    var ul = document.querySelectorAll(".reviews ul")[0];

    var reviews = [,,,,];
    reviews[0] = "Praesent ac enim blandit, bibendum ipsum id, fringilla diam. Vivamus finibus magna vel dolor 			fermentum, vel posuere nulla laoreet. Nullam vulputate purus mauris, vitae accumsan lectus porta sit amet.";
    reviews[1] = "Suspendisse eu lacus interdum felis volutpat aliquet. Sed ligula justo, lacinia sed est ut, dictum vehicula massa. Praesent a erat accumsan justo semper efficitur. Etiam sed nibh sapien. ";
    reviews[2] = "Duis vel molestie justo, condimentum efficitur felis. Nunc rhoncus vitae dui non pulvinar. Proin libero dui, fermentum ac ligula in, interdum eleifend nunc. Nam at iaculis erat. Cras facilisis felis dui, quis efficitur dui rhoncus a.";
    reviews[3] = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce faucibus maximus augue elementum tincidunt. Sed iaculis purus quis tortor laoreet, a egestas mauris lobortis. ";

    var authors = [];
    authors[0] = "Jeffrey Foret";
    authors[1] = "Loriann Lay";
    authors[2] = "Christina Grauer";
    authors[3] = "Rupert Jeppson";

    for (var revCount = 0; revCount < reviews.length; revCount++){
        var buttonRev = document.createElement('li');
        ul.appendChild(buttonRev);
    }

    review.innerHTML = reviews[0];
    author.innerHTML = authors[0];

    var buttons = document.querySelectorAll(".reviews li");
    buttons[0].style.color="#ffe600";

    buttons[0].onclick = function(){
        review.innerHTML = reviews[0];
        author.innerHTML = authors[0];
        for (var t=0; t<4; t++){
            buttons[t].style.color="white";
        }
        this.style.color = "#ffe600";
    }
    buttons[1].onclick = function(){
        review.innerHTML = reviews[1];
        author.innerHTML = authors[1];
        for (var t=0; t<4; t++){
            buttons[t].style.color="white";
        }
        this.style.color = "#ffe600";
    }
    buttons[2].onclick = function(){
        review.innerHTML = reviews[2];
        author.innerHTML = authors[2];
        for (var t=0; t<4; t++){
            buttons[t].style.color="white";
        }
        this.style.color = "#ffe600";
    }
    buttons[3].onclick = function(){
        review.innerHTML = reviews[3];
        author.innerHTML = authors[3];
        for (var t=0; t<4; t++){
            buttons[t].style.color="white";
        }
        this.style.color = "#ffe600";
    }






//------------------------------------------------------------------------------
//----- VALIDATION -------------------------------------------------------------

    var name = document.getElementById('name');
    var email = document.getElementById('mail');
    var subject = document.getElementById('subject');
    var message = document.getElementById('textarea');
    var errorText = document.getElementsByClassName('formErr');

    var submit = document.getElementById('submit');
    var errors = false;

    name.addEventListener('keydown', function () {
        if(name.value.match(/[^a-zA-Z]/g) != null){
            errorText[0].innerHTML = 'Допускаются только символы английского алфавита';
            errors = true;
        }
        else{;
            errorText[0].innerHTML = '';
            errors = false;
        }

    });


    email.addEventListener('keydown', function () {
        if(email.value.match(/[^a-zA-Z0-9_@]/g) != null){
            errorText[1].innerHTML = "Допускаются только символы английского алфавита, цифры, знаки '_'' и '@'";
            errors = true;
        }
        else{;
            errorText[1].innerHTML = '';
            errors = false;
        }

    });

    subject.addEventListener('keydown', function () {
        if(subject.value.match(/[^a-zA-Z0-9]/g) != null){
            errorText[2].innerHTML = "Допускаются только символы английского алфавита и цифры";
            errors = true;
        }
        else{;
            errorText[2].innerHTML = '';
            errors = false;
        }

    });

    submit.onclick = function (e) {
        if(errors == true){
           e.preventDefault();
           errorText[3].innerHTML = "В формах присутствуют ошибки";
        }
        else if(name.value == '' || email.value == '' || subject.value == '' || message.value == ''){
            e.preventDefault();
            errorText[3].innerHTML = "Все поля должны быть заполнены";
        }

    };










}