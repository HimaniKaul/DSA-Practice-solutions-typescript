class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false
        }
       const sCount : any = {}
       const tCount : any = {}
       for(let i = 0; i<s.length; i++) {
         const char = s.charAt(i)
         const tChar = t.charAt(i)

         if(tCount[tChar]!== undefined) {
            tCount[tChar]++
         }
         else {tCount[tChar] = 1}
         
         if(sCount[char]!== undefined) {
            sCount[char]++
         } else {sCount[char] = 1}
       }

      for (const char in sCount) {
        if(!tCount[char] || sCount[char] !== tCount[char]) {
            return false
        }
      }

        return true
    }
}
