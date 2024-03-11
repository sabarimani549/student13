function checkflames(char) 
{
    let c="";
    c=char;
    if(c=="F")
        return "Friend";
    else if(c=="L")
        return "Lover";
    else if(c=="A")
        return "Affair";
    else if(c=="M")
        return "Marriage";
    else if(c=="E")
        return "Enemy";
    else if(c=="S")
        return "Sister";
    else
        console.log("error");
}
function removeelt(s,ind)
{
    let str="";
    str=s;
    if (ind == 0) 
        str=str.substring(ind+1, str.length);
    else if(ind==str.length-1)
        str=str.substring(0,ind);
    else
        str=str.substring(0,ind)+str.substring(ind+1,str.length);
    return str;
}
function removespc(s) {
   // str=str.replaceAll("\\s","");
    let str="";
    str=s;
    return str.toLowerCase();
}
function Comparestrings(s1,s2) 
{
    let str1="";
    let str2="";
    str1=s1;
    str2=s2;
    for(let i = 0; i < str1.length ; i++ )
    {
        for (let j = 0; j < str2.length; j++)
         {
            if( str1.charAt(i) == str2.charAt(j))
            {
                str1=removeelt(str1,i);
                i=i-1;
                str2=removeelt(str2,j);
                break;
            }
            
        }
    }
    
    return (str1.length + str2.length);
}
function main()
{
    let s1=document.getElementById("name1").value;
    let s2=document.getElementById("name2").value;
    s1=removespc(s1);
    s2=removespc(s2);
    let n=Comparestrings(s1,s2);
    console.log(n);
    let str="FLAMES";
    let i=0;
    let strdup;
    while(true)
    {
       for (let j = 1; j< n; j++) 
       {
           i=i+1;
           if (i==str.length) 
           {
            i=0;}
       }
        
        strdup=str;
        console.log(strdup);
        str=removeelt(str,i);

        if (strdup.length == 1) {
            break;
        }
        if (i == str.length) {
            i=0;
        }
        
    }
    console.log(strdup);
    document.getElementById("result").innerHTML = checkflames(strdup);
    
 
}