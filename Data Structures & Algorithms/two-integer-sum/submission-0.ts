class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * nums = [3,4,5,6], target = 7
     */
    twoSum(nums: number[], target: number): number[] {

    const hash: { [search: number]: number} = {}

    for(let i = 0; i < nums.length; i++) {
        const search = target - nums[i] 
        if(hash[search] !== undefined) {
            if(hash[search] === i) continue
            return hash[search] > i ? [i, hash[search]]  :[hash[search], i]
        }
        hash[nums[i]] = i

    }

 
    return []

    }

}
