class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length === 0) {
            return [];
        }
        const map: any = {};
        const newArray = [];
        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const sortedWord = word.split("").sort().join("");

            if (map[sortedWord] !== undefined) {
                map[sortedWord].push(word);
            } else {
                map[sortedWord] = [word];
            }
        }

        for (const e in map) {
            newArray.push(map[e]);
        }
        return newArray;
    }
}
