/*___________________________ Variable Decleration Start _________________________*/

var portfolio = Array.from(document.querySelectorAll('.img-thumbnail'));
var slideshow = document.querySelector('.slideshow');
var show = document.querySelector('.show');
var exit = document.querySelector('.exit');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var imageIndex;
/*___________________________ Variable Decleration Start _________________________*/

/*__________________ get Portfolio Start ________________*/
for (var i = 0; i < portfolio.length; i++) {
    portfolio[i].addEventListener("click", function (e) { showPortfolio(e) })
}
/*__________________ get Portfolio End ________________*/


/*__________________ Show Portfolio Start ________________*/

function showPortfolio(event) {
console.log(event.target)
    imageIndex = portfolio.indexOf(event.target);
    slideshow.classList.add('d-flex');
    slideshow.classList.remove('d-none');
    show.style.backgroundImage = `url(${event.target.src})`;
}
/*__________________ Show Portfolio End ________________*/


/*__________________ Exit Portfolio Start ________________*/
exit.addEventListener("click", exitPortfolio);
function exitPortfolio()

{ 
    slideshow.classList.add('d-none'); slideshow.classList.remove('d-flex'); 


}

/*__________________ Exit Portfolio End ________________*/


/*__________________ Next Portfolio Start ________________*/
next.addEventListener("click", nextPortfolio)
function nextPortfolio() 
{
    if (imageIndex == 5) {

        imageIndex = -1;

    }

    var nextImage = portfolio[imageIndex + 1].src; console.log(nextImage);


    show.style.backgroundImage = `url(${nextImage})`;
    imageIndex++;
    console.log(imageIndex);
}   



/*__________________ Next Portfolio End ________________*/


/*__________________ Previous Portfolio Start ________________*/
prev.addEventListener("click", nextPortfolio) 
function prevPortfolio()
{
    if (imageIndex == 0) {

        imageIndex = 6;

    }
    var prevImage = portfolio[imageIndex - 1].src; console.log(prevImage);

    show.style.backgroundImage = `url(${prevImage})`;
    imageIndex--;
    console.log(imageIndex);

}

/*__________________ Previous Portfolio End ________________*/


/*__________________ Exit on Double Click Start ________________*/
slideshow.addEventListener("dblclick", function () 
{ slideshow.classList.add('d-none'); slideshow.classList.remove('d-flex'); 


}
);
/*__________________ Exit on Double Click End ________________*/




document.addEventListener('keydown',function(e)
{
    if(e.key=='Escape')
    {
        exitPortfolio();
    }
    else if(e.key=='ArrowRight')
    {
        nextPortfolio() ;
    }
    else if(e.key=='ArrowLeft')
    {
        prevPortfolio();
    }
})
