function main() {
    // set up a new date object 
    var today = new Date();
    //extract the hour min and seconds and store them in a variable 
    var month = today.getMonth() + 1
    var day = today.getDate()
    var year = today.getFullYear()
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
    curr_minute = checkTime(curr_minute);
    curr_second = checkTime(curr_second);
    
    document.getElementById("curr_time").innerHTML = 
        day + "/" + month + "/" + year + " - " + curr_hour + ":" + curr_minute + ":" + curr_second;
    var t = setTimeout(main, 500);
    
    

    
     myIndex = 0;
carousel();
    
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}