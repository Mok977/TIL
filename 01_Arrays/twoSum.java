import java.util.ArrayList;

public class twoSum {
    public static int[] twoSum(int[] nums, int target) {
        // nums = [2,7,11,15], target = 9
        // 回傳index = 相加是target的值的index
        // 1. 要把 num 先遍歷出來
        ArrayList<Integer> temp = new ArrayList<>();

        // i代表他們的索引
        // nums是值要做相加
        for (int i = 0; i < nums.length; i++) {
            // current -> 現在 index的值
            // i = 0; current = 2;
            for (int j = 0; j < i; j++) {
                int current = nums[i]; // 2 =0, 7 =1, 11 =2, 15 =3
                int pre = nums[j];
                if (current + pre == target) {
                    temp.add(i);
                    temp.add(j);
                }
            }
        }
        int[] ans = temp.stream().mapToInt(Integer::intValue).toArray();
        return ans;
    }

    public static void main(String[] args) {
        int[] nums = { 2, 7, 11, 15 };
        int target = 9;
        System.out.println(twoSum(nums, target));
    }
}
