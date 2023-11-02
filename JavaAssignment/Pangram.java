import java.util.*;
public class Pangram {
    public static void main(String[] args) {
        Scanner sc = new  Scanner(System.in);
        String input = sc.nextLine();
        boolean isPangram = isPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        // Creating a boolean array to track the presence of each letter from 'a' to 'z'
        boolean[] alphabetPresent = new boolean[26];

        // Converting the input string to lowercase to handle case-insensitivity
        input = input.toLowerCase();

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if ('a' <= ch && ch <= 'z') {
                alphabetPresent[ch - 'a'] = true;
            }
        }

        // Checking if all letters from 'a' to 'z' are present
        for (boolean present : alphabetPresent) {
            if (!present) {
                return false;
            }
        }

        return true;
    }
}

