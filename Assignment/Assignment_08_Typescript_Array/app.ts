// 1. Write a ts program to read and print elements of array.

let printArr=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);    
    }
}
// printArr()
// 2. Write a ts program to print all negative elements in an array.
let printNegative=()=>{
    let arr:number[]=[1,-2,3,-4,5,-6,-78,8,99,4]
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
        console.log(arr[i]);    
    }
}
}
// printNegative()
// 3. Write a ts program to find sum of all array elements. 
let arrSum=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
    let sum:number=0;
    for(let i=0; i<arr.length; i++){
         sum+=arr[i]  
    }
    console.log(sum) 
}
// arrSum()
// 4. Write a ts program to find maximum and minimum element in an array.
let minMax=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
     let min:number=Math.min(...arr)
     let max:number=Math.max(...arr)
     console.log(`Minimum number is ${min}`);
     console.log(`Maximum number is ${max}`);
    
}
// minMax()
// 5. Write a ts program to find second largest element in an array.
let secondLargest=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
    let max:number=Math.max(...arr)
    arr.splice(arr.indexOf(max),1)
    let secondMax:number=Math.max(...arr)
    console.log(`Second largest element in array is ${secondMax}`)
}
// secondLargest()
// 6. Write a ts program to count total number of even and odd elements in an array.
let countEvenOdd=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
    let even:number=0;
    let odd:number=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            even+=1
        }else{
            odd+=1
        } 
    }
    console.log(`Total Even in Array is ${even}`);
    console.log(`Total Even in Array is ${odd}`);   
}
// countEvenOdd()
// 7. Write a ts program to count total number of negative elements in an array.
let totalNegative=()=>{
    let arr:number[]=[1,-2,3,-4,5,-6,-78,8,99,4]
    let neg:number=0
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
          neg+=1
    }
}
console.log(`Total number of negative elements in an array ${neg} `);
}
// totalNegative()
// 8. Write a ts program to copy all elements from an array to another array.
let copyArr=()=>{
    let arr:number[]=[1,-2,3,-4,5,-6,-78,8,99,4]
    const arr2:number[]=[...arr]
    console.log(arr2);
}
// copyArr()
// 9. Write a ts program to insert an element in an array.
let insertElement=()=>{
    var arr:string[]= [ 'A', 'B', 'E' ];
     arr[2]='C'
     console.log(arr)
}
// insertElement()
// 10. Write a ts program to delete an element from an array at specified position.
let deleteElement=()=>{
    let arr:number[]=[1,-2,3,-4,5,-6,-78,8,99,4]
    let a=arr.splice(3,1,44)
    console.log(arr);   
}
// deleteElement()
// 11. Write a ts program to count frequency of each element in an array.
let countFreq=()=>{
    const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[5], counts[2], counts[9], counts[4]);
}
// countFreq()
// 12. Write a ts program to print all unique elements in the array.
let printUnique=()=>{
    const arr = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,-4,5,-6,-78,8,99, 9, 4];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<9 && arr[i]>2){
            console.log(arr[i]);
            
        }
    }
}

// printUnique()
// 13. Write a ts program to count total number of duplicate elements in an array.
let duplicateCount=()=>{
    const arr = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,-4,5,-6,-78,8,99, 9, 4];
    let count=0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                count++
                break;
            }
        }  
    }
    console.log(count);
}
// duplicateCount()
// 14. Write a ts program to delete all duplicate elements from an array.
let duplicateDel=()=>{
    const arr:number[] = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,-4,5,-6,-78,8,99, 9, 4];
     let arr2:number[]=[]
     arr.forEach((el)=>{
        if(!arr2.includes(el)){
            arr2.push(el)
        }
     })
      console.log(arr2);
}
// duplicateDel()
// 15. Write a ts program to merge two array to third array.

let mergeArr=()=>{
    const arr:number[] = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,- 4];
    const arr2:number[] = [5-2,3,-4,5,-6,-78,8,99, 9, 4];
    let arr3=arr.concat(arr2)
    console.log(arr3)
}
// mergeArr()
// 16. Write a ts program to find reverse of an array.
let reverseArr=()=>{
    const arr:number[] = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,- 4];
    arr.reverse()
    console.log(arr);
    
}
// reverseArr()
// 17. Write a ts program to put even and odd elements of array in two separate array.

let sepEvenOdd=()=>{
    const arr:number[] = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,- 4]; 
    let even:number[]=[]
    let odd:number[]=[]
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
     even.push(arr[i])
    }else{
       odd.push(arr[i]) 
    }
  }
  console.log(`Even array ${even}`);
  console.log(`Odd array ${odd}`);
  
}
// sepEvenOdd()
// 18. Write a ts program to search an element in an array.
let searchElement=(element:number)=>{
    const arr:number[] = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,- 4]; 
    let e=arr.indexOf(element)
    if(e>0){
        console.log(`Element is found`); 
    }else{
        {
            console.log(`Element is Not found`); 
        }
    }
}
// searchElement(2)
// 19. Write a ts program to sort array elements in ascending or descending order.
let sortArr=()=>{
    const arr:number[] = [5, 5, 5, 1, 2, 0, 2, 2,-2,3,-4,5,-6,-78,8,99, 9, 4];
    arr.sort()
    console.log(`Ascending Order of array ${arr}`);
    arr.reverse()
    console.log(`escending Order of array ${arr}`);
    
}
// sortArr()
// 20. Write a ts program to sort even and odd elements of array separately.
let SepEvenOdd=()=>{
    const arr:number[] = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,- 4]; 
    let even:number[]=[]
    let odd:number[]=[]
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
     even.push(arr[i])
    }else{
       odd.push(arr[i]) 
    }
  }
  console.log(`Even array ${even}`);
  console.log(`Odd array ${odd}`);
  
}
// SepEvenOdd()
// 21. Write a ts program to left rotate an array.
function rotLeft(rotation:number) {
    const arr:Number[]=[1,2,3,4,5]
    const rotateArr:Number[]=arr.concat()
    for(let i=0; i<rotation; i++){
     const front=rotateArr.shift()
     rotateArr.push(front)

    }
   console.log( `Array before Rotation ${arr}`);
   console.log( `Array After Rotation ${rotateArr}`);
   
  }
  
  
//   rotLeft(4)
// 22. Write a ts program to right rotate an array.
function rotRight(rotation:number) {
    const arr:Number[]=[1,2,3,4,5]
    const rotateArr:Number[]=arr.concat()
    for(let i=0; i<rotation; i++){
     const front=rotateArr.pop()
     rotateArr.unshift(front)

    }
   console.log( `Array before Rotation ${arr}`);
   console.log( `Array After Rotation ${rotateArr}`);
   
  }
  
  
  rotRight(1)
