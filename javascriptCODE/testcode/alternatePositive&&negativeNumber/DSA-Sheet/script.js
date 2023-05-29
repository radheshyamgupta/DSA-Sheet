//  Alternate positive and negative numbers
//  Given an unsorted array Arr of N positive and negative numbers. Your task is to create an array of alternate positive and negative numbers without changing the relative order of positive and negative numbers.
// Note: Array should start with a positive number.
 

// Example 1:

// Input: 
// N = 9
// Arr[] = {9, 4, -2, -1, 5, 0, -5, -3, 2}
// Output:
// 9 -2 4 -1 5 -5 0 -3 2
// Explanation : Positive elements : 9,4,5,0,2
// Negative elements : -2,-1,-5,-3
// As we need to maintain the relative order of
// postive elements and negative elements we will pick
// each element from the positive and negative and will
// store them. If any of the positive and negative numbers
// are completed. we will continue with the remaining signed
// elements.The output is 9,-2,4,-1,5,-5,0,-3,2.
 class Solution{
    rearrange(arr,n){
//         //code here
       var arrp=[];
        var arrn=[];
        for(var i=0;i<arr.length;i++){
            if(arr[i]>=0){
                arrp.push(arr[i])
            }else{
                arrn.push(arr[i])
            }
        }
        
        var i=0;
        var j=0;
        var k=0;
        while(i<arrp.length && j<arrn.length){
            arr[k]=arrp[i];
            k++;
            arr[k]=arrn[j];
            i++;
            j++;
            k++;
        }
        if(i<arrp.length){
            while(i<arrp.length){
            arr[k]=arrp[i];
            i++;
            k++;
        }
        }
        if(j<arrn.length){
            while(j<arrn.length){
            arr[k]=arrn[j];
            j++;
            k++;
        }
        }
        return arr;
}
}