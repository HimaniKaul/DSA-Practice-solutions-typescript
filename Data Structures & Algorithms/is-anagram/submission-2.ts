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
         if(sCount[char]!== undefined) {
            sCount[char]++
         } else {sCount[char] = 1}
       }

       for(let i = 0; i<t.length; i++) {
         const char = t.charAt(i)
         if(tCount[char]!== undefined) {
            tCount[char]++
         }
         else {tCount[char] = 1}
       }

      for (const char in sCount) {
        if(!tCount[char] || sCount[char] !== tCount[char]) {
            return false
        }
      }

        return true
    }
}
