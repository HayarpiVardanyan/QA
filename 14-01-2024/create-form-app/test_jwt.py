import pytest
import requests

auth_api_endpoint = 'http://localhost:5000/api'
jwt_token = None

@pytest.mark.auth
@pytest.mark.registration
def test_user_registration():
    registration_data = {
        'name': 'pytest_example',
        'email': 'pytest_example@test.com',
        'password': 'test'
    }

    registration_response = requests.post(f'{auth_api_endpoint}/user/registration', json=registration_data)
    assert registration_response.status_code == 200

@pytest.mark.auth
@pytest.mark.login
def test_user_login():
    global jwt_token
    login_data = {
        'name': 'pytest_example',
        'email': 'pytest_example@test.com',
        'password': 'test'
    }

    login_response = requests.post(f'{auth_api_endpoint}/user/login',json=login_data)
    assert login_response.status_code == 200
    jwt_token = login_response.json().get('token')
    assert jwt_token is not None

@pytest.mark.form
def test_form():
    global jwt_token
    assert jwt_token is not None
    headers = {
        'Authorization': f'Bearer {jwt_token}',
        'Content-Type': 'application/json'
    }
    form_data = {
        'name': 'pytest_example',
        'surname': 'surname',
        'education': '10hg',
        'work': 'no'
    }

    form_response = requests.post(f'{auth_api_endpoint}/form', headers=headers, json=form_data)
    assert form_response.status_code == 201

@pytest.mark.existing_data
@pytest.mark.registration
def test_user_registration_with_existing_email():
    existing_registration_data = {
        'name': 'pytest_example',
        'email': 'pytest_example@test.com',
        'password': 'test'
    }

    existing_registration_response = requests.post(f'{auth_api_endpoint}/user/registration', json= existing_registration_data)

    assert existing_registration_response.status_code == 404
