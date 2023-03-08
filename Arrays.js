//Arrays are used to store the list of elements.
//indexing start from zero.
//no negative indexing is present.
//values of different type can be store at the same time in array.
//** Arrays are mutable that is they can be changed.
//In JavaScript arrays are object.
var arr=["eshika","verma","is","smart",92,567,true,undefined];
console.log(arr);

//accessing the elements  of the array
console.log(arr[0]);
console.log(arr[-1]);//undefined
console.group(arr[6]);//undefined

//length property
//Give the length of the array or no. of elements.
console.log(arr.length);

//adding the element in the array
arr[8]=false;
console.log(arr);

//updating the existing element 
arr[0]="eshi";
console.log(arr); 

//iteration over the array
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//Various methods of arrays

//toString()
//convert the array to the string
console.log(arr.toString());//eshi,verma,is,smart,92,567,true,,false

//join(seperator)//return the string
console.log(arr.join("$"));//eshi$verma$is$smart$92$567$true$$false
console.log(arr.join(""));//eshivermaissmart92567truefalse
console.log(arr.join("_"));//eshi_verma_is_smart_92_567_true__false

//pop()-removes the last element of the array
let a=[1,2,3,4];
console.log(a.pop());//4

//push(elem)-add the new element at the end of the array and return the new length of the array.
console.log(a.push(5));
console.log(a);

//shift()-remove the first element of the array and return it.
let m=[2,3,45,67,89];
console.log(m.shift());

//unshift()-add the element at the beginning and return the new length.
console.log(m.unshift(31));
console.log(m);

//delete-delete the specified element but do not affect the actual length.
let l=[6,5.4,3,2];
console.log(l.length);
console.log(delete l[0]);true 
console.log(l.length);
console.log(l);//[ <1 empty item>, 5.4, 3, 2 ]

// concat()-add two or more arrays
//But do not change the actual array.
let u=["3","#","$","!"];
let v=[4.5,6,7,8];
console.log(u.concat(v));/**[
                            '3', '#', '$', '!',
                             4.5, 6,   7,   8
                            ]**/
console.log(u);//[ '3', '#', '$', '!' ]

//sort()-sort the array alphabetically like-1,2,3,4..order
v.sort()
console.log(u.sort());// [ '!', '#', '$', '3' ]
let y=[789,453,231,095];
console.log(y.sort());//231 453 789 095

let compare=(x,y)=>{
     return x-y;
}
let compare1=(x,y)=>{
    return y-x;
}

//sort in ascending order
console.log(y.sort(compare));

//sort in descending order
console.log(y.sort(compare1));

//splice(start index,no of elements to be deleted,list of elements to be iserted)
let t=[3,4,5,6,7];
console.log(t.splice(1,2,9,10,23));//[4,5]
console.log(t)//[3,9,10,23,6,7]

//slice(startIndex,endIndex)..take elements one less than the end index
let h=[5,6,7,8];
console.log(h.slice(1,5));//[6,7,8]

//reverse()-reverse the array
console.log(h.reverse());