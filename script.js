//-----------------------------------------------------------------------------
//-----RESPONSIVE-MENU---------------------------------------------------------

window.onload = function () {
    var menuButton = document.querySelectorAll('.header-bg button')[0];
    var respMenu = document.querySelectorAll('.header-bg ul')[0];
    var menuCounter = 0;

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
//-----SLIDER---------------------------------------------------------------

    var slideData = [,,,,];
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
            servHeader[j].style.marginTop = '20px';
        }

        services[j].onmouseleave = function(){
            this.style.height = "104px";
            this.style.width = "104px";
            this.style.borderRadius = "52px";
            this.style.backgroundSize = "40%";
            this.style.marginTop = '50px';
            servHeader[j].style.marginTop = '25px';
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
//-----PORTFOLIO---------------------------------------------------------------
    var yellow = document.querySelectorAll(".works .preview .yellow");
    var portfolio = document.querySelectorAll('.works .preview .portfolio');

    for(var o = 0; o<portfolio.length; o++){

        portfolio[o].onmouseover = function () {
           this.children[0].style.display = 'block';

        }
        portfolio[o].onmouseleave = function () {
            this.children[0].style.display = 'none';

        }
    }

    //filter

    var filterButtons = document.querySelectorAll('.works .filter li span');
    var allWorks = document.querySelectorAll('.works .preview .portfolio');
        filterButtons[0].onclick = function(){
            for(var i = 0; i < allWorks.length; i++){
                allWorks[i].style.display = 'block';
                yellow[i].style.display = 'none';
            }
        }

        filterButtons[1].onclick = function(){
            var webWorks = document.querySelectorAll('.works .preview .web-design');
            for(var i = 0; i < allWorks.length; i++){
                allWorks[i].style.display = 'none';
            }
            for(var j = 0; j < webWorks.length; j++){
                webWorks[j].style.display = 'block';
                yellow[j].style.display = 'none';
            }
        }
        filterButtons[2].onclick = function(){
            var graphWorks = document.querySelectorAll('.works .preview .graphic-design');
            for(var i = 0; i < allWorks.length; i++){
                allWorks[i].style.display = 'none';
            }
            for(var j = 0; j < graphWorks.length; j++){
                graphWorks[j].style.display = 'block';
                for(var y = i; y < yellow.length; y++){
                    yellow[j].style.display = 'none';
                }
            }
        }
        filterButtons[3].onclick = function(){
            var photoWorks = document.querySelectorAll('.works .preview .photography');
            for(var i = 0; i < allWorks.length; i++){
                allWorks[i].style.display = 'none';
            }
            for(var j = 0; j < photoWorks.length; j++){
                photoWorks[j].style.display = 'block';
                yellow[j].style.display = 'none';
            }
        }
        filterButtons[4].onclick = function(){
            var illustWorks = document.querySelectorAll('.works .preview .illustration');
            for(var i = 0; i < allWorks.length; i++){
                allWorks[i].style.display = 'none';
            }
            for(var j = 0; j < illustWorks.length; j++){
                illustWorks[j].style.display = 'block';
                yellow[j].style.display = 'none';
            }
        }

























}