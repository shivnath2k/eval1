var name_regex = /^[a-z A-Z]+$/;
var email_regex = /\S+@\S+\.com/;
var num_of_passenger=1;

const items={
    'first_name': 0, 'last_name':0, 'age':0, 'email':0, 'phone':0,
    'first_name2': 0, 'last_name2':0, 'age2':0, 'email2':0, 'phone2':0
}

function invalid(elm)
{
    elm.style.borderColor="red";
    var buttonid="submit"+num_of_passenger;
    items[elm.id]=0;
    document.getElementById(buttonid).setAttribute("disabled","true");
}
function valid(elm)
{
    elm.style.borderColor="black";
    items[elm.id]=1;
    enablebutton();
}

function enablebutton()
{   var count=0;
    var buttonid="submit"+num_of_passenger;
    for (const item in items)
    {
        if(items[item]===0)
        {
            return;
        }
        count=count+1;
        if(num_of_passenger==1 && count==5)
        {
            break;
        }
    }
    
    document.getElementById(buttonid).removeAttribute("disabled");

}

function v_firstname(elm,passengernum)
{
    var passenger="s_first_name"+passengernum;
    var msg=document.getElementById(passenger);
    if(elm.value.length==0)
    {
        invalid(elm);
        msg.innerHTML="First name cannot be Empty";
        return;
    }
    if(elm.value.length>20)
    {
        invalid(elm);
        msg.innerHTML="First name cannot be more than 20 characters";
        return;
    }
    if(name_regex.test(elm.value))
    {
        valid(elm);
        msg.innerHTML="";
    }
    else
    {
        invalid(elm);
        msg.innerHTML="First name can only be alphabets";
    } 
}


function v_lastname(elm,passengernum)
{
    var passenger="s_last_name"+passengernum;
    var msg=document.getElementById(passenger);
    if(elm.value.length==0)
    {
        invalid(elm);
        msg.innerHTML="Last name cannot be Empty";
        return;
    }
    if(elm.value.length>20)
    {
        invalid(elm);
        msg.innerHTML="Last name cannot be more than 20 characters";
        return;
    }
    if(name_regex.test(elm.value))
    {
        valid(elm);
        msg.innerHTML="";
    }
    else
    {
        invalid(elm);
        msg.innerHTML="Last name can only be alphabets";
    } 
}


function v_age(elm,passengernum)
{
    var passenger="s_age"+passengernum;
    var msg=document.getElementById(passenger);
    if(elm.value.length==0)
    {
        invalid(elm);
        msg.innerHTML="Age cannot be empty";
        return;
    }
    if(elm.value<18)
    {
        invalid(elm);
        msg.innerHTML="Age cannot be less than 18";
        return;
    }
    if(elm.value>999)
    {
        invalid(elm);
        msg.innerHTML="Enter proper age";
    }
    else{
        valid(elm);
        msg.innerHTML="";
    }
}


function v_email(elm,passengernum)
{
    var passenger="s_email"+passengernum;
    var msg=document.getElementById(passenger);
    if(elm.value.length==0)
    {
        invalid(elm);
        msg.innerHTML="Email cannot be Empty";
        return;
    }
    if(email_regex.test(elm.value))
    {
        valid(elm);
        msg.innerHTML="";
    }
    else
    {
        invalid(elm);
        msg.innerHTML="Enter proper email";
    } 
}


function v_phone(elm,passengernum)
{
    var passenger="s_phone"+passengernum;
    var msg=document.getElementById(passenger);
    var phone_regex = /^[0-9]+$/;
    if(elm.value.length==0)
    {
        invalid(elm);
        msg.innerHTML="Phone Number cannot be Empty";
        return;
    }
    if(elm.value.length>10)
    {
        invalid(elm);
        msg.innerHTML="Phone number cannot be more than 10 digits";
        return;
    }
    if(phone_regex.test(elm.value))
    {
        valid(elm);
        msg.innerHTML="";
    }
    else
    {
        invalid(elm);
        msg.innerHTML="Phone number can only be numbers";
    }
    
}

function addPassenger(elm)
{
    num_of_passenger=2;
    document.getElementById("myform2").style.display="block";
    document.getElementById("submit1").style.display="none";
    elm.style.display="none";
    
}
