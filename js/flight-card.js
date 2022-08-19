let flight_details = fetch("/js/flights.json");
flight_details.then(response => response.json()).then(data=>{ 
            
    


    for(let i = 0; i < data.length; i++) {
        let obj = data[i];
        var box = document.createElement("div");
        box.className="card border-dark mb-3";
        box.style.width="30rem";
        var flno =document.createElement("div");
        flno.className="card-header";
        var flnoh3=document.createElement("h3");
        flnoh3.innerHTML=obj.flightNum+" . . "+obj.origin+" -> "+obj.destination;

        var detail=document.createElement("div");
        detail.className="card-body text-dark"
        var depttime=document.createElement("h5");
        depttime.className="card-title";
        const dtime=new Date(obj.departTime);
        depttime.innerHTML="Deaparture Time: "+dtime.toUTCString();
        var arrivetime=document.createElement("h5");
        arrivetime.className="card-title";
        const atime=new Date(obj.ArrivalTime);
        arrivetime.innerHTML="Arrival Time: "+atime.toUTCString();
        
        var price=document.createElement("h5");
        price.className="card-title"
        price.innerHTML="Price: "+"₹"+obj.price;

        var proceed=document.createElement("a");
        proceed.className="btn btn-primary";
        proceed.innerHTML="Proceed To Book";
        proceed.style.color="white";
        proceed.setAttribute('id',obj.flightNum);
        proceed.setAttribute('onClick','openpage(this.id)');
        
        
        box.appendChild(flno);
        flno.appendChild(flnoh3);
        box.appendChild(detail);
        detail.appendChild(depttime);
        detail.appendChild(arrivetime);
        detail.appendChild(price);
        detail.appendChild(proceed);

        document.getElementById("flight-cards").appendChild(box);
        //document.getElementById("flight-cards").style.flex-direction="row";

    }

});


function openpage(id)
{
    var flnum = id;
    sessionStorage.setItem("flnum", flnum);
    window.location.href = "/../html/booking.html";
}