import java.util.*;
public class RomanNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String romanNumeral=sc.next();
        int result = romanToInteger(romanNumeral);
        System.out.println("The integer equivalent of " + romanNumeral + " is: " + result);
    }

    public static int romanToInteger(String s) {
        int result = 0;
        int prevValue = 0;

        // Create a mapping of Roman numerals to their integer values
        java.util.Map<Character, Integer> romanMap = new java.util.HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        // Iterating through the Roman numeral from right to left
        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);
            int value = romanMap.get(c);

            // Checking if the current numeral is smaller than the previous one (e.g., IV or IX)
            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }
            prevValue = value;
        }

        return result;
    }
}
