1./* Can we put duplicate values in the set object ? */

let myset=new Set();
 myset.add(10);
 myset.add(30);
 myset.add(20);
 myset.add(10);
 console.log(myset);

 /* No We cannot Put Dublicate data Into Set Objects */

 /*  2. Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object 
*/

myset.delete(20);

console.log(myset);


/* 3. Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods. */

let temp=new Set();

for(let i=0;i<=4;i++)
   temp.add(Math.floor(Math.random() * 11));

   console.log(temp);

   if(temp.has(8))
   console.log("Exist");
   else
   console.log(" Doesnt exist ");
