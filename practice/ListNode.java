package practice;

public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

    class AddTwoNumbers {
        public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
            int num1 = 0;
            int num2 = 0;
            while (l1.next != null) {
                num1 = +l1.val ;
                num2 += +l2.val;
                l1 = l1.next;
                l2 = l2.next;
            }

            //new ListNode(num1[0], num1[1]);

            return l2;
        }

}