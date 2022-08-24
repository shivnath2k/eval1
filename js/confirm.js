const urlParams = new URLSearchParams(location.search);
function addPassengerDetail()
{
    document.getElementById("first_name").innerHTML=urlParams.get('first_name');
    document.getElementById("last_name").innerHTML=urlParams.get('last_name');
    document.getElementById("age").innerHTML=urlParams.get('age');
    document.getElementById("gender").innerHTML=urlParams.get('gender');
    document.getElementById("email").innerHTML=urlParams.get('email');
    document.getElementById("phone").innerHTML=urlParams.get('phone');
    if(urlParams.get("submit2")!==null)
    {
        add2ndPassengerDetails();
    }
}

function add2ndPassengerDetails()
{
    document.getElementById("passenger2").style.display="block";
    document.getElementById("first_name2").innerHTML=urlParams.get('first_name2');
    document.getElementById("last_name2").innerHTML=urlParams.get('last_name2');
    document.getElementById("age2").innerHTML=urlParams.get('age2');
    document.getElementById("gender2").innerHTML=urlParams.get('gender2');
    document.getElementById("email2").innerHTML=urlParams.get('email2');
    document.getElementById("phone2").innerHTML=urlParams.get('phone2');
}

var itm=sessionStorage.getItem("flnum");
let flight_details = fetch("/js/flights.json");
flight_details.then(response => response.json()).then(data=>{ 
    for(let i = 0; i < data.length; i++)
    {
        var obj=data[i];
        if(obj["flightNum"]==itm)
        {
            document.getElementById("flno").innerHTML=obj["flightNum"];
            document.getElementById("origin_city").innerHTML=obj["origin"];
            document.getElementById("destin_city").innerHTML=obj["destination"];
            const dtime=new Date(obj.departTime);
            document.getElementById("dept_time").innerHTML=dtime.toUTCString();
            const atime=new Date(obj.ArrivalTime);
            document.getElementById("arrival_time").innerHTML=atime.toUTCString();
            if(urlParams.get("submit2")!==null)
            {
                document.getElementById("price").innerHTML=obj["price"]*2;
            }
            else
            {
                document.getElementById("price").innerHTML=obj["price"];

            }
            break;
        }
    }
});

function goHome()
{
    window.location.href="/../main.html";
}
