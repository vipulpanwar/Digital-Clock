const getTime = () => {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var sessions = 'AM';

    if(hr >= 12){
        sessions = 'PM';
    }
    if(hr == 0){
        hr = '12';
    }
    if(hr > 12){
        hr = hr - 12;
    }
    if(hr < 10){
        hr = '0' + hr;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }

    document.getElementById('clock').innerHTML = hr + ":" + min + ":" + sec + " " + sessions;
    setTimeout(getTime, 1000);     /* for continous update of time that is after ever 1000 miliseconds*/

}