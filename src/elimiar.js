const array = [12345];
/*
class ArrayC{
    constructor(array){

    }

    elements = [];

    function mapCreated(change(param)){
        const newArray=array;
        for (let i = 0; i < newArray.length; i++) {
            param = newArray[i];
            change(param);
            
        }
    }
}
*/
function mapCreated(change){
    const newArray=array;
    for (let i = 0; i < newArray.length; i++) {
        let param = newArray[i];
        ///change(param);
        
    }
    return newArray;
}

console.log(mapCreated(number => number*2));

