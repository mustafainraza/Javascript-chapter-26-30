var sec=Math.random(sec);
sec=Math.ceil(sec*10);

var val=prompt("Enter any number :- ");

var cho=3;

while(cho>=1)
{
    if(val==sec)
    {
        alert("Congrats you guessed correctly !");
        break;
    }
    else
    {
        cho--;
        if(cho>=1)
        {
            alert("Sorry Try again "+cho+" chance left");
            val=prompt("Enter any number :- ");
        }
    }
}

if(cho<1)
{
    alert("Failed ! The secret number was "+sec);
}