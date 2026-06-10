// half right
var ptr=""

for(i=1;i<=4;i++)
{
    for(j=3;j>i;j--)
    {
        ptr+=""
    }
    for(k=1;k<=i;k++)
    {
        ptr+="*"
    }
    ptr+="\n"
}
console.log(ptr);


// half left
 var ptr="";

 for (i=1;i<=4;i++) {
    for (j=4;j>i;j--) {
        ptr += " ";
    }
    for (k=1;k<=i; k++) {
        ptr += "*"
    }
    ptr += "\n";
 }
 console.log(ptr);
 

 //  hollow traingle
ptr = ""
 for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        if(i==1||i==5||j==1||j==5)
            ptr+="*"
        else
            ptr+=" "

    }

 ptr+="\n"
}
console.log(ptr);

// initial letter

var ptr=""

for(i=1;i<=10;i++){
for(j=1;j<=10;j++){
     if(
 j==1 ||
(i+j==7 && i<=5) || (i-j==4 && i>=5)
        )
     ptr+="*"
     else
     ptr+=" "
    }
    ptr+="\n"
}

console.log(ptr)