import math_operations
import pytest

def test_add():
    assert math_operations.add(2, 3) == 5

def test_subtract():
    assert math_operations.subtract(5, 3) == 2

def test_multiply():
    assert math_operations.multiply(2, 3) == 6

def test_divide():
    assert math_operations.divide(6, 3) == 2

def test_divide_by_zero():
    with pytest.raises(ValueError):
        math_operations.divide(6, 0)