from sqlalchemy import Table, Column, Integer, String, DateTime, MetaData,text
from datetime import datetime

def test_connection(connection):
    result = connection.execute(text('SELECT * FROM users'))
    one = result.fetchone()
    assert one[1] == 'user21',f"Expected username 'user21', but got '{one[1]}'"


def test_insert_and_select_data(connection):
    metadata = MetaData()
    users_table = Table(
        'table1',
    metadata,
    Column('user_id', Integer, primary_key=True),
    Column('username', String),
    Column('email', String),
    )
    metadata.create_all(connection.engine)
    
    insert = users_table.insert().values(
        user_id =1,
        username='test_user',
        email='test@example.com',
    )
    connection.execute(insert)
    connection.commit()

    select = users_table.select()
    result = connection.execute(select).fetchall()
    
    row_as_dict = result[0]._asdict()
    assert row_as_dict['username'] == 'test_user', f"Expected username 'test_user', but got '{row_as_dict['username']}'"
    assert row_as_dict['email'] == 'test@example.com', f"Expected email 'test@example.com', but got '{row_as_dict['email']}'"







