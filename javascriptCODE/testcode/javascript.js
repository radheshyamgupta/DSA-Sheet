// Union of two arrays can be defined as the common and distinct elements in the two arrays.
// Given two sorted arrays of size n and m respectively, find their union.


// Example 1:

// Input: 
// n = 5, arr1[] = {1, 2, 3, 4, 5}  
// m = 3, arr2 [] = {1, 2, 3}
// Output: 1 2 3 4 5
// Explanation: Distinct elements including 
// both the arrays are: 1 2 3 4 5.
class Solution {
  //Function to return a list containing the union of the two arrays. 
  findUnion(arr1, arr2, n, m)
  {
  let mymap=new Map()
      let union =[]
      for(let i=0;i<n;i++)
      {
         
          mymap.set(arr1[i],true)
      }
       for(let i=0;i<m;i++)
      {
          mymap.set(arr2[i],true)
          
      }
      for(let key of mymap.keys())
      {
          union.push(key)
          
      }
     
 union.sort(function(a, b) {

if (a < b) {
  return -1;
} else if (a > b) {
  return 1; 
} else {
  return 0; 
}
});
  
      return union 
}
}