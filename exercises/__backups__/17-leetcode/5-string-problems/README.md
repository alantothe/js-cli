# LeetCode String Problems

## Overview
String problems test pattern matching, manipulation, and algorithms like sliding window and KMP. They're essential for interview preparation.

## Learning Objectives
- Master string manipulation techniques
- Learn pattern matching algorithms
- Understand sliding window on strings
- Handle edge cases with Unicode and special characters

## Problem: minWindow

Find the minimum window substring containing all characters from another string.

**Example:**
```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
```

**Approach:**
- Sliding window with character frequency map
- Expand window until all characters found
- Contract window while maintaining valid substring
- Track minimum window seen
- Time: O(m + n), Space: O(n)

## Problem: groupAnagrams

Group strings that are anagrams of each other.

**Example:**
```
Input: ["eat", "tea", "ate", "nat", "tan", "bat"]
Output: [["eat", "tea", "ate"], ["nat", "tan"], ["bat"]]
```

**Approach:**
- Use sorted characters as key
- Group strings with same sorted key
- Time: O(n * k log k) where k is max string length
- Space: O(n * k)

## Problem: multiplyStrings

Multiply two numbers represented as strings.

**Example:**
```
Input: num1 = "123", num2 = "456"
Output: "56088"
```

**Approach:**
- Digit-by-digit multiplication (like long multiplication)
- Store results in array then convert to string
- Time: O(m * n), Space: O(m + n)

## Tips
- Use character frequency maps for pattern problems
- Sliding window works on strings too
- Remember Unicode and case sensitivity
- Test with empty strings and special characters
