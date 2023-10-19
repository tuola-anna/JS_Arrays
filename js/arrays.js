function task1()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let sum=arr.filter(index=>index%2==0).reduce((sum,elem)=>sum+Math.sqrt(elem),0);
    console.log(sum);
}

function task2()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let sum=arr.filter(elem=>elem>0 && elem<10).reduce((sum,elem)=>sum+elem,0);
    console.log(sum);
}

function isChetn(arr)
{
    return arr.every(elem=>elem%2==0);
}