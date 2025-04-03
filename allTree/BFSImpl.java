package allTree;

import java.util.LinkedList;
import java.util.Queue;

public class BFSImpl {
    class Node {
        int val;
        Node left;
        Node right;

        Node(int val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(10);

        while (true) {
            if (queue.size() == 0) {
                return;
            }
            int node = queue.poll();
            // if()
        }
    }
}
