import { textArray } from "./data.mjs"
let val = 0;
textArray.map((str)=>{
   const arrayStr =  str.split('')
   const arr  = []
   arrayStr.map((ele)=>{
   const parsed = parseFloat(ele);
   !isNaN(parsed)? arr.push(parsed) : null
})
   let num = 0
   num = arr.length===1 ? String(arr[0])+String(arr[0]) :  String(arr[0])+String(arr[arr.length-1])
   val+=Number(num) 
})

console.log(val)
