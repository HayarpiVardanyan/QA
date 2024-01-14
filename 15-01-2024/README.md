# Math Operations Test Coverage Report

This document details the test coverage for the `math_operations` Python module using `pytest` and the `coverage` library.

## Installation

First, install the required packages:

```bash
pip install pytest coverage
```

## Running Tests
To run the tests for the math_operations module, execute the following command:
# Math Operations Test Coverage Report

This document details the test coverage for the `math_operations` Python module using `pytest` and the `coverage` library.

## Installation

First, install the required packages:

```bash
pip install pytest coverage
```

Running Tests
To run the tests for the math_operations module, execute the following command:

```bash
pytest test_math_operations.py
```

## Test Output
```bash
=========================================================================================== test session starts ===========================================================================================
platform linux -- Python 3.8.10, pytest-7.4.4, pluggy-1.3.0
rootdir: /home/hayarpi/myGit/QA/15-01-2024
collected 5 items                                                                                                                                                                                         

test_math_operations.py .....                                                                                                                                                                       [100%]

============================================================================================ 5 passed in 0.01s ============================================================================================
```

## Measuring Test Coverage
To measure the test coverage, use the coverage tool as follows:
```bash
coverage run -m pytest test_math_operations.py
```

The output of the test coverage run is:
```bash
=========================================================================================== test session starts ===========================================================================================
platform linux -- Python 3.8.10, pytest-7.4.4, pluggy-1.3.0
rootdir: /home/hayarpi/myGit/QA/15-01-2024
collected 5 items                                                                                                                                                                                         

test_math_operations.py .....                                                                                                                                                                       [100%]

============================================================================================ 5 passed in 0.01s ============================================================================================
```

## Coverage Report
Generate a detailed coverage report using:
```bash
coverage report -m
```

# Coverage Report Output
```bash

Name                      Stmts   Miss  Cover   Missing
-------------------------------------------------------
math_operations.py           10      0   100%
test_math_operations.py      13      0   100%
-------------------------------------------------------
TOTAL                        23      0   100%



```bash
pytest test_math_operations.py

Test Output

=========================================================================================== test session starts ===========================================================================================
platform linux -- Python 3.8.10, pytest-7.4.4, pluggy-1.3.0
rootdir: /home/hayarpi/myGit/QA/15-01-2024
collected 5 items                                                                                                                                                                                         

test_math_operations.py .....                                                                                                                                                                       [100%]

============================================================================================ 5 passed in 0.01s ============================================================================================

```

# Measuring Test Coverage
To measure the test coverage, use the coverage tool as follows:
```bash
coverage run -m pytest test_math_operations.py
```

The output of the test coverage run is:
```bash
=========================================================================================== test session starts ===========================================================================================
platform linux -- Python 3.8.10, pytest-7.4.4, pluggy-1.3.0
rootdir: /home/hayarpi/myGit/QA/15-01-2024
collected 5 items                                                                                                                                                                                         

test_math_operations.py .....                                                                                                                                                                       [100%]

============================================================================================ 5 passed in 0.01s ============================================================================================
```

## Coverage Report
Generate a detailed coverage report using:
```bash
coverage report -m
```

# Coverage Report Output

```bash
Name                      Stmts   Miss  Cover   Missing
-------------------------------------------------------
math_operations.py           10      0   100%
test_math_operations.py      13      0   100%
-------------------------------------------------------
TOTAL                        23      0   100%
```

