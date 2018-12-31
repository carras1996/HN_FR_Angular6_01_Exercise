function hotelBooking(arrivals, departures, K){
    // length arrivals and departures equal
    let listTimeGuest = [];
    let count = 1;
    for(let i = 0; i< arrivals.length; i++){
        listTimeGuest.push([arrivals[i], departures[i]]);
    }
    for(let i = 0; i< listTimeGuest.length - 1; i++){
        if(listTimeGuest[i][1] > listTimeGuest[i+1][0]){
            count++;
        }
    }
    if(count <= K){
        return true;
    }
    else return false;
}

var M = hotelBooking([1, 3, 5,7], [2, 6, 8,9], 3);
console.log(M);