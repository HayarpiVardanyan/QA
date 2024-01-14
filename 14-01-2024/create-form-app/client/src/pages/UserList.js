// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import { getUserList } from '../http/listAPI';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await getUserList();
//         setUsers(response);
//       } catch (err) {
//         console.error("Error:", err);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-center">All Users</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Surname</th>
//             <th>Education</th>
//             <th>Work</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={user.id}>
//               <td>{index + 1}</td>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.surname}</td>
//               <td>{user.education}</td>
//               <td>{user.work}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default UserList;







import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getUserList } from '../http/listAPI';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});
  const [editedUserId, setEditedUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUserList();
        setUsers(response);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setEditedUserData(userToEdit);
    setEditedUserId(userId);
    setShowEditModal(true);
  };

  const handleSave = () => {
    // Add logic to save edited data, for example, make an API call
    console.log("Saving edited data:", editedUserData);


    setEditedUserData({});
    setEditedUserId(null);
    setShowEditModal(false);
  };

  return (
    <div>
      <h1 className="text-center">All Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Education</th>
            <th>Work</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.education}</td>
              <td>{user.work}</td>
              <td>
                <Button variant="primary" onClick={() => handleEdit(user.id)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editedUserData.name || ''}
                onChange={(e) =>
                  setEditedUserData({ ...editedUserData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                value={editedUserData.surname || ''}
                onChange={(e) =>
                  setEditedUserData({ ...editedUserData, surname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formEducation">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                value={editedUserData.education || ''}
                onChange={(e) =>
                  setEditedUserData({ ...editedUserData, education: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formWork">
              <Form.Label>Work</Form.Label>
              <Form.Control
                type="text"
                value={editedUserData.work || ''}
                onChange={(e) =>
                  setEditedUserData({ ...editedUserData, work: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserList;



