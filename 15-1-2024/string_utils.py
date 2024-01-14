def is_palindrome(s):
    """Check if a string is a palindrome."""
    return s == s[::-1]

def count_vowels(s):
    """Return the number of vowels in a string."""
    vowels = 'aeiou'
    return sum(1 for char in s.lower() if char in vowels)

def reverse_string(s):
    """Return the reversed string."""
    return s[::-1]
