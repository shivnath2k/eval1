var name_regex = /^[a-z A-Z]+$/;
var email_regex = /\S+@\S+\.com/;
const items={
    'first_name': 0, 'last_name':0, 'age':0, 'email':0, 'phone':0
}

function invalid(elm)
{
    elm.style.borderColor="red";
    items[elm.id]=0;
    document.getElementById("submit").setAttribute("disabled","true");
}
function valid(elm)
{
    elm.style.borderColor="black";
    items[elm.id]=1;
    enablebutton();
}

function enablebutton()
{
    for (const item in items)
    {
        if(items[item]===0)
        {
            return;
        }
    }
    document.getElementById("submit").removeAttribute("disabled");
}

function v_firstname(elm)
{
    
    var msg=document.getElementById("s_first_name");
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


function v_lastname(elm)
{
    
    var msg=document.getElementById("s_last_name");
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


function v_age(elm)
{
    var msg=document.getElementById("s_age");
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


function v_email(elm)
{
    var msg=document.getElementById("s_email");
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


function v_phone(elm)
{
    var msg=document.getElementById("s_phone");
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
