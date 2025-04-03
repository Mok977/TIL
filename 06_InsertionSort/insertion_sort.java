public class insertion_sort {

    public static void insertionSort(int[] nums) {
        for (int runOne = 0; runOne < nums.length; runOne++) {
            for (int runTwo = runOne - 1; runTwo >= 0; runTwo++) {
                if (nums[runTwo + 1] > nums[runTwo]) {
                    swap(nums, runOne + 1, runTwo);
                } else {
                    break;
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
        int[] nums = { 10, 9, 3, 5, 6 };
        insertionSort(nums);
        System.out.println();
    }
}