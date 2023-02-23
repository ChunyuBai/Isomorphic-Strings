/* 
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
*/

//Solution: one direction isomorphic
/* 
logic: 1. check two strings length whether equal or not
2. create a hash map and loop the string
3. if the map contain key && the key is not equal to the value
then return true, otherwise return false
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  if(s.length !== t.length){
      return false
  } 
  let mapS = new Map();

  for(let i = 0; i<s.length; i++){
      if(mapS.has(s[i])&& mapS.get(s[i])!== t[i]){
          return false
      } else {
          mapS.set(s[i],t[i])
      }
  } return true;
};