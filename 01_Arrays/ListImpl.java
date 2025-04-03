public class ListImpl {

    static class Node {
        Integer val;
        Node nextNode;

        public Node(int val) {
            this.val = val;
        }
    }

    private Node start;
    private Node end;

    public ListImpl() {
    }

    public void add(int val) {
        if (start == null) {
            start = new Node(val);
            end = start;
        } else {
            end.nextNode = new Node(val);
            end = end.nextNode;
        }
    }

    public Node search(int val) {
        if (start.val == val) {
            return start;
        }
        Node currentNode = start.nextNode;
        while (currentNode != null) {
            if (currentNode.val == val) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    public void remove(int val) {
        Node prev = null;

        if (start.val == val) {
            start = start.nextNode;
            return;
        }

        Node currentNode = start.nextNode;
        prev = start;
        while (currentNode != null) {
            if (currentNode.val == val) {
                prev.nextNode = currentNode.nextNode;
            }
            prev = currentNode;
            currentNode = currentNode.nextNode;
        }
        return;
    }

    public void print() {
        Node start = this.start;
        while (start != null) {
            System.out.print(start.val);
            start = start.nextNode;

            if (start != null) {
                System.out.print(", ");
            }
        }
    }

    public static void main(String[] args) {
        ListImpl linkImpl = new ListImpl();
        linkImpl.add(3);
        linkImpl.add(5);
        linkImpl.add(7);
        linkImpl.remove(3);
        Node n = linkImpl.search(3);
        linkImpl.print();
        System.out.println();
    }
}
