import pytest
import requests
import allure

auth_api_endpoint = 'http://localhost:5000/api'

@allure.title("Test User Registration")
@allure.description("""
    Verifies that a new user can successfully register.
    This test sends a POST request to the user registration endpoint with a new user's details 
    (name, email, password) and expects a successful (200 OK) response, indicating that the 
    user has been registered correctly.
    """)
@pytest.mark.auth
@pytest.mark.registration
def test_user_registration():
    registration_data = {
        'name': 'pytest_example',
        'email': 'pytest_example@test.com',
        'password': 'test'
    }

    registration_response = requests.post(f'{auth_api_endpoint}/user/registration', json=registration_data)
    assert registration_response.status_code == 200 ,f"Expected status code 200, got {registration_response.status_code}"



@allure.title("Test registration with existing data")
@allure.description("""
    Validates the system's behavior when a registration attempt is made using an email that already exists.
    The test ensures that the registration endpoint correctly identifies duplicate email usage and 
    responds with the appropriate error code (expected 404 Not Found).
    It sends a POST request to the user registration endpoint with registration data that includes an 
    email already used in a previous registration, and expects to receive a 404 Not Found response, 
    indicating the prevention of duplicate registrations.
    """)
@pytest.mark.existing_data
@pytest.mark.registration
def test_user_registration_with_existing_email():
    existing_registration_data = {
        'name': 'pytest_example',
        'email': 'pytest_example@test.com',
        'password': 'test'
    }

    existing_registration_response = requests.post(f'{auth_api_endpoint}/user/registration', json= existing_registration_data)

    assert existing_registration_response.status_code == 404, f"Expected status code 404 for existing email, got {existing_registration_response.status_code}"


@allure.title("Test User Not Found case")
@allure.description("""
    Validates the system's response when an operation is attempted on a non-existent user.
    This test sends a request to an endpoint that requires a valid user.
""")
@pytest.mark.user_not_found
def test_user_not_found():
    non_existent_user_data = {
        'name': 'pytest_example1',
        'email': 'pytest_example1@test.com',
        'password': 'test'
    }

    response = requests.post(f'{auth_api_endpoint}/user/login', json=non_existent_user_data)
    assert response.status_code == 500, f"Expected status code 500 for non-existent user, got {response.status_code}"



@allure.title("Test Incorrect Password")
@allure.description("""
    Validates the system's response when an incorrect password is provided during authentication.
""")
@pytest.mark.auth
@pytest.mark.incorrect_password
def test_incorrect_password():
    user_credentials = {
        'name': 'pytest_example1',
        'email': 'user@example.com',
        'password': 'wrongPassword'
    }

    response = requests.post(f'{auth_api_endpoint}/user/login', json=user_credentials)

    assert response.status_code == 500, f"Expected status code 500 for incorrect password, got {response.status_code}"

@allure.title("Test Form Posts Data")
@allure.description("Tests form data submission with various data sets.")
@allure.step("Posting form data")
@pytest.mark.form
@pytest.mark.parametrize("name, surname, education, work", [
    ('John', 'Doe', 'BSc', 'yes'),
    ('Jane', 'Smith', 'MSc', 'no'),

])
def test_form(user_login, name, surname, education, work):
    headers = {
        'Authorization': f'Bearer {user_login}',
        'Content-Type': 'application/json'
    }
    form_data = {
        'name': name,
        'surname': surname,
        'education': education,
        'work': work
    }
    form_response = requests.post(f'{auth_api_endpoint}/form', headers=headers, json=form_data)
    assert form_response.status_code == 201, f"Expected status code 201 for form submission, got {form_response.status_code}"
    allure.attach("Form data used for request:", str(form_data), allure.attachment_type.TEXT)
    allure.attach("Response received:", str(form_response.text), allure.attachment_type.TEXT)



@allure.title("Test list of users")
@allure.description("""
    Validates the functionality of retrieving a list of users. 
    The test checks if a GET request to the user list endpoint returns a 200 OK status, 
    indicating a successful retrieval of user data.
    """)
def test_get_list_of_users(user_login):
    headers = {
        'Authorization': f'Bearer {user_login}',
        'Content-Type': 'application/json'
    }
    url = "http://localhost:3000/userList"
    response = requests.get(url, headers=headers)
    assert response.status_code == 200 ,f"Expected status code 200 for getting list of users, got {response.status_code}"