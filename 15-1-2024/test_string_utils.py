from string_utils import is_palindrome, count_vowels, reverse_string

def test_is_palindrome():
    assert is_palindrome("radar")
    assert not is_palindrome("python")

def test_count_vowels():
    assert count_vowels("hello") == 2
    assert count_vowels("world") == 1

def test_reverse_string():
    assert reverse_string("hello") == "olleh"
    assert reverse_string("") == ""
