import * as fs from 'fs';
fs.readFile('input.txt', 'utf8',(err,data)=>{
    if(err){
        return console.error(err);
    }
   
    calibration(data.split('\n'))
})

const numbers = [1,2,3,4,5,6,7,8,9]
let count = 0
let strNum:string[] = []
let result = 0 

function backfowardStr(strText:string) {
    let digitsNumber = strText.length
    count = 0
    for(let i=digitsNumber-1;i>=0;i--){
        numbers.map((numbers) => {
            if(strNum.length > 2) return
            if(strText[i] == numbers.toString()){
                strNum.push(strText[i])
                return 
            }
            count++
        })
    }
}

function calibration(digits:string[])
{
    console.log(digits)
    let digitsNumber = digits.length
    for(let i=0;i<digitsNumber;i++){
        let actualStr = digits[i]
        for(let j = 0; j < actualStr.length ;j++){

            numbers.map((numbers) => {
                if(strNum.length > 1) return
                if(actualStr[j] === numbers.toString()){
                    strNum.push(actualStr[j])
                    backfowardStr(actualStr)
                    if(i == digitsNumber-1 || (strNum.length > 1 && strNum.length < 3)){
                        return
                    }
                    strNum.pop()
                    return
                }
                count++
            });
        }
        let oneNumber = strNum.join('')
        strNum = []
        console.log(`math`,oneNumber)
        if(oneNumber.length > 0)result += Number.parseInt(oneNumber)
    }
    console.log(`resultado final `,result)
}

// calibration(
//     [
//         'hlpqrdh3',
//         'h6',
//     ]
// )