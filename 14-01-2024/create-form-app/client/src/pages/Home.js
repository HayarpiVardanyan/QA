// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//       <h1>Hello!</h1>
//       <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
//         <Link to="/login" className="button" style={{ margin: '0 10px' }}>
//           Login
//         </Link>
//         <Link to="/registration" className="button" style={{ margin: '0 10px' }}>
//           Registration
//         </Link>
//         <Link to="/userList"></Link>
//       </div>
//     </div>
//   );
// }

// export default Home;






import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h4>Welcome to My Website!</h4>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button as={Link} to="/login" variant="success" style={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button as={Link} to="/registration" variant="success">
          Registration
        </Button>
        <Link to="/userList"></Link>
      </div>
    </Container>
  );
}

export default Home;




