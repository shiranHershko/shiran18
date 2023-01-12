console.log("start");

const numbesrArray : number[]=[3,3];

const getAvarage = ( arr:number[] ) => {
    let sum=0;
    let index=0;
    while (index<arr.length)
    {
        sum=sum+arr[index];
        index++;
    }
    const myAvarage=sum/arr.length;
    return myAvarage;
};
const ans=getAvarage(numbesrArray);
console.log(ans);
console.log("start");
