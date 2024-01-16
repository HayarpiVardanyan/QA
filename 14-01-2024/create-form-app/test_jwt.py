import pytest
import requests

auth_api_endpoint = 'http://localhost:5000/api'

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

@pytest.mark.form
def test_form(user_login):
    headers = {
        'Authorization': f'Bearer {user_login}',
        'Content-Type': 'application/json'
    }
    form_data = {
        'name': 'pytest_example',
        'surname': 'surname',
        'education': '10hg',
        'work': 'no'
    }

    form_response = requests.post(f'{auth_api_endpoint}/form', headers=headers, json=form_data)
    assert form_response.status_code == 201,f"Expected status code 201 for form submission, got {form_response.status_code}"



def test_get_list_of_users(user_login):
    headers = {
        'Authorization': f'Bearer {user_login}',
        'Content-Type': 'application/json'
    }
    url = "http://localhost:3000/userList"
    response = requests.get(url, headers=headers)
    assert response.status_code == 200 ,f"Expected status code 200 for getting list of users, got {response.status_code}"

    



