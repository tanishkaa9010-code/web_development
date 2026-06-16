arr=[];
function chunkArrayInGroups (arr,num){
  let newarr=[];
for (const char of arr){
  newarr.length=num;
  newarr.push(char);
}
return newarr;
}
