class Solution {
    hasDuplicate(nums: number[]): boolean {

        const duplicate: { [key: number]: number } = {};

        for (let i = 0; i < nums.length; i++) {

            const num = nums[i];

            if (duplicate[num] !== undefined) {
                return true;
            }

            duplicate[num] = 1;
        }

        return false;
    }
}