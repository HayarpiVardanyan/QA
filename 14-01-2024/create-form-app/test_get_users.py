import requests

def test_get_list_of_users():
    url = "http://localhost:3000/userList"
    response = requests.get(url)
    assert response.status_code == 200 