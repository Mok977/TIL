public class Bubble_SortImpl {
    public static void bubbleSort(int[] nums) {
        int length = nums.length;
        for (int round = 0; round < length; round++) {
            int len = length - round;
            for (int j = 1; j < len; j++) {
                if (nums[j - 1] > nums[j]) {
                    swap(nums, j - 1, j);
                }
            }
        }
    }

    private static void swap(int[] nums, int left, int right) {
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 5, 3, 2, 7 };
        bubbleSort(nums);
        System.out.println(nums);
    }

}
