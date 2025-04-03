public class ArrayImpl {
    private Integer[] array;
    private Integer lastIndex;

    public ArrayImpl(int size) {
        array = new Integer[size];
        lastIndex = -1;
    }

    public void addByIndex(int iAdd, int val) {
        /* full spcae need expand */
        if (lastIndex + 1 == array.length) {
            expandSpace();
        }
        /* 插入的位置不合理直接忽略 */
        if (iAdd > lastIndex + 1 || iAdd < 0) {
            return;
        }
        /* step.1 move all value one slot ofter */
        for (int i = lastIndex; i >= iAdd; i--) {
            array[i + 1] = array[i];
            array[i] = null;
        }
        array[iAdd] = val;
        lastIndex++;
    }

    public void addByValue(int val) {
        addByIndex(lastIndex + 1, val);
    }

    public void expandSpace() {
        Integer[] newArray = new Integer[array.length * 2];
        for (int i = 0; i < newArray.length; i++) {
            newArray[i] = array[i];
        }
        this.array = newArray;
    }

    public static void main(String[] args) {
        /* initialize */
        ArrayImpl myArray = new ArrayImpl(5);

        /* add O(1) */
        myArray.addByValue(9);
        myArray.addByValue(11);
        myArray.addByValue(2);
        myArray.addByValue(98);
        myArray.addByValue(35);

        /* add by O(1) + expand O(n) */
        myArray.addByValue(44);

        /* add by index O(n) */
        int iAdd = 1;
        myArray.addByIndex(iAdd, 50);

        System.out.println();

    }
}