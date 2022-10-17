
// 문제 1-1 다음 값의 평균 구하라
let arr1 = [10, 20, 30, 10, 20, 30, 40, 10];
// const avg = arr1.reduce
//     ((a,b) => a+b)/arr1.length;
// console.log(avg);

function avg(arr){
    let sum = 0;
    for(i of arr){
        sum += parseInt(i);
    } console.log(sum/arr.length)
}

// 문제 1-2 다음 값의 분산 구하라
// 분산 => (각 값에 - 평균) ** 2/전체요소의 개수 

// arr1.map(i=>((i-avg)**2)/arr1.length);

/* 문제 2 평균값 구하라
'5, 4, 10, 2, 5' */

let prompt = '5,4,10,2,5'.split(",");
avg(prompt);

//문제3 다음 array의 각 자릿수의 합을 구하세요
// hint 문자열로 변환해서 풀어주세요!
// [11, 22, 33, 111, 2]
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17

// https://paullabworkspace.notion.site/af05539cc3014f0abc3deb7e09779614

// 문제 4
4.1 반복문만 사용하여 숫자단위 콤마 찍기(예 - 1,000,000)

function insertComma(i){
    let str = i.toString();
    for(i=str.length-3;i>0;i-=3){
        str = str.slice(0,i)+','+str.slice(i);
    }
    return str
}

4.2 반복문만 사용하여 숫자단위 콤마 없애기(예 - 1,000,000 → 1000000)
4.3 문자열 뒤집기


