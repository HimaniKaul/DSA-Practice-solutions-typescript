class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // ['a','cc','dd']
    encode(strs: string[]): string {
        let encrypt = "";
        for (let str = 0; str < strs.length; str++) {
            encrypt = encrypt + strs[str].length + "#" + strs[str];
        }
        return encrypt;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // 1#a2#cc2#dd
    // 01234567
    decode(str: string): string[] {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i
            while(str[j] !== "#") {
                j++;
            }
            const length = Number(str.substring(i, j));
            const word = str.substring(j + 1, j + 1 + length); //5,7
            result.push(word);
            i = j + 1 + length
        }

        return result;
    }
}
