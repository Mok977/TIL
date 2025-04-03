import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class twoSum2 {
    public static void main(String[] args) {
        int[] nums = { 2, 7, 11, 15 };
        int target = 9;
        // System.out.println(twoSum(nums, target));
    }

    // target - nums[i] -> 9-2 = 7 -> temp

    // temp = target - nums[i]
    //
    // Map<temp, i> numMap [7, ]
    // 比對 Map 裡面有沒有
    // numMap.put(temp, i);
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        int i = 0;
        while (i < nums.length) {
            int current = nums[i];
            int temp = target - current;
            if (numMap.containsKey(current)) {
                return new int[] { numMap.get(current), i };
            }
            numMap.put(temp, i);
            i++;
        }
        return new int[] {};
    }
}
