class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hash: { [key: number]: number } = {};
        const result: number[] = [];

        // Count frequency
        for (let i = 0; i < nums.length; i++) {
            if (hash[nums[i]] !== undefined) {
                hash[nums[i]]++;
            } else {
                hash[nums[i]] = 1;
            }
        }

        // Sort unique numbers by frequency
        const uniqueNums = Object.keys(hash).map(Number);

        uniqueNums.sort((a, b) => hash[b] - hash[a]);

        // Take the first k numbers
        for (let i = 0; i < k && i < uniqueNums.length; i++) {
            result.push(uniqueNums[i]);
        }

        return result;
    }
}
