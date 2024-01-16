from sqlalchemy import create_engine
import pytest
import requests
import os

@pytest.fixture(scope="module")
def user_login():
    login_data = {
        'name': 'pytest_example',
        'email': 'pytest_example@test.com',
        'password': 'test'
    }
    login_response = requests.post("http://localhost:5000/api/user/login",json=login_data)
    assert login_response.status_code == 200
    return login_response.json().get('token')


@pytest.fixture(scope="session")
def connection():
    engine = create_engine(
        "postgresql+psycopg2://form_user:1@localhost:5432/form_nest_db".format(
            os.environ.get('DB_USER'),
            os.environ.get('DB_PASSWORD'),
            os.environ.get('DB_HOST'),
            os.environ.get('DB_PORT'),
            os.environ.get('DB_NAME'),
        )
    )
    return engine.connect()

