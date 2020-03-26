function tipFunction() {
    var feedback = document.getElementById("myList").value;
    var amt= document.getElementById("amount").value;
    if(feedback=="good")
    {
        amt = (amt*18)/100; 
    }
    else if(feedback=="average")
    {
        amt = (amt*10)/100; 
    }
    else
    {
        amt = (amt*5)/100; 
    }
    document.getElementById("demo").innerHTML = "Tip amount is: "+ amt +"<br/><br/> Thank You very much. Hope to see you soon.";
    
  }

  function makeReservation(){
      alert(document.getElementById("reserve").innerHTML= "Yeeyy!! We have reserved a seat for you");
  }
