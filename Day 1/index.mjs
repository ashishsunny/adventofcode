// Day-1 Pt:1
import { textArray } from "./data.mjs"
let val = 0;
const substrings = {
   'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

function convertStringToNumber(inputString, substring) {
   const pattern = new RegExp(Object.keys(substring).join('|'), 'g');
   const resultString = inputString.replace(pattern, match => substring[match]);
   return resultString;
 }

const numberedArray = textArray.map((x)=>{
   return  convertStringToNumber(x, substrings);
})



numberedArray.map((str)=>{
   const arrayStr =  str.split('')
   const arr  = []
   arrayStr.map((ele)=>{
   const parsed = parseFloat(ele);
   !isNaN(parsed)? arr.push(parsed) : null
})
   let num = 0
   num = arr.length===1 ? String(arr[0])+String(arr[0]) :  String(arr[0])+String(arr[arr.length-1])
   console.log(num)
   val+=Number(num)
})

console.log(val)
