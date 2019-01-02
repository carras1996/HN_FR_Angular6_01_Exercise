function hotelBooking(arrivals, departures, K){
    // length arrivals and departures equal
    let listTimeGuest = [];
    let count = K;
    for(let i = 0; i< arrivals.length; i++){
        listTimeGuest.push([arrivals[i], departures[i]]);
    }

    let roomUsed = [];

    for(let i = 0; i < listTimeGuest.length; i++){
        if(count > 0){
            roomUsed.push(listTimeGuest[i]);
            count--;
        }
        if(count === 0){
            for(let j = 0; j< roomUsed.length;j++){
                if(listTimeGuest[i][0]> roomUsed[j][1]){
                    roomUsed.unshift();
                    roomUsed.push(listTimeGuest[i]);
                    count++;
                    count--;
                }
            }
        }
    }
    if(count >= 0){
        return true;
    }
    else return false;
}

var M = hotelBooking([1, 2,6,8], [4, 5, 9,10], 2);
console.log(M);