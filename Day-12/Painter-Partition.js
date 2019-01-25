// Input : 
//   K : 2
//   T : 5
//   L : [1, 10]

// Output : 50

//khong quan tam co bao nhieu tho son
// quan tam xem cong viec co bao nhieu phan
//Thoi gian it nhat de hoan thanh tat ca cong viec, so tho son bang so phan cong viec => max array L => min time
// thoi gian lau nhat de hoan thanh tat ca cong viec, chi co 1 tho son => sum array L => max time
//Thoi gian toi uu thoa man so tho son nam trong khoang [minTime,maxTime] (phai dung binaraSearch)

function findPainters(boardsArr,timeNeed){
    let painters = 1;
    let time = 0
    for(let i = 0; i< boardsArr.length; i++){
        time += boardsArr[i];
        if(time === timeNeed){
            
        }
    }

}

function calcTimeDone(painters,timeUnit,boardsArr){
    let minTime = Math.max(...boardsArr);
    let maxTime = boardsArr.reduce((acc,crr) => {return acc+crr},0);
    let arrTimeSatisfy = []
    while(minTime <= maxTime){
        let midTime = Math.floor((maxTime + minTime)/2);
        if(painters = findPainters(boardsArr,midTime)){
            arrTimeSatisfy.push(midTime);
        }
        else if(painters < findPainters(boardsArr,midTime)){
            minTime = midTime + 1;
        }
        else{
            maxTime = midTime - 1;
        }
    }
    arrTimeSatisfy.push(minTime);
    return Math.min(...arrTimeSatisfy)*timeUnit;
}

calcTimeDone(2,5,[1,10,12]);