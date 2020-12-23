document.addEventListener("click",function(){
    
    var randomno1 = Math.floor(Math.random()*6) + 1;
    var imgSrc1 = "images/dice" + randomno1 + ".png";
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src",imgSrc1);

    var randomno2 = Math.floor(Math.random()*6) + 1;
    var imgSrc2 = "images/dice" + randomno2 + ".png";
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src",imgSrc2);

    if(randomno1 > randomno2)
    {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        document.querySelector("h1").classList.add('heading');
    }
    else if(randomno1 < randomno2)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
        document.querySelector("h1").classList.add('heading');
    }
    else  
    {
        document.querySelector("h1").innerHTML = "Draw!";
        document.querySelector("h1").classList.add('heading');
    }
});

