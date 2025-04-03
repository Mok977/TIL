package allTree;

public class DFSImpl {

    public void dfs(int node) {
        if (node == 0) {
            return;
        }

        System.out.println("Blue foot! " + node);
        dfs(node - 1);
        System.out.println("Green foot! " + node);
        dfs(node - 1);
        System.out.println("Red foot! " + node);
    }

    public static void main(String[] args) {
        DFSImpl getDFS = new DFSImpl();
        getDFS.dfs(4);
        System.out.println();
    }
}
