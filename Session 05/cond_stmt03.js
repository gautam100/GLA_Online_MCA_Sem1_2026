function chkWeekDay(){
    let day = document.getElementById("week_day").value
    let elem = document.getElementById("result")
    //alert(day)
    if(day === "mon"){
        elem.innerHTML = "<h1>This is first day of week!</h1>"
    }else if(day === "tue"){
        elem.innerHTML = "<h1>This is second day of week!</h1>"
    }else if(day === "wed"){
        elem.innerHTML = "<h1>This is third day of week!</h1>"
    }else if(day === "thrus"){
        elem.innerHTML = "<h1>This is fourth day of week!</h1>"
    }else if(day === "fri"){
        elem.innerHTML = "<h1>This is fifth day of week!</h1>"
    }else if(day === "sat"){
        elem.innerHTML = "<h1>This is week end!</h1>"
    }else if(day === "sun"){
        elem.innerHTML = "<h1>This is sunday...week end!</h1>"
    }else{
        elem.innerHTML = "<h1>Pls choose a day from drop down"
    }
}