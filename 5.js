var coin=Math.random(coin);
coin=Math.ceil(coin*2);

var toss;
if(coin==1)
{
    toss="Tail";
}
else
{
    toss="Head";
}

document.write(coin+"<br> random coin value is = "+toss);