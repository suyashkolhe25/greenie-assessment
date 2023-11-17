import React, { useState } from 'react';
import './userTable.css';
import { Button, Modal } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserTable = ({ userData, searchTerm }) => {

  const [selectedUser, setSelectedUser] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const generateReport = () => {
    if (selectedUser) {
      toast.success(`Report of ${selectedUser.name} sent to your mail`);
    }
    closeModal();
  };

  const handleRowClick = (user) => {
    console.log('Row clicked:', user);
    openModal(user);
  };

  // Filter users based on search term
  const filteredUsers = userData.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm) ||
    String(user.id).includes(searchTerm) ||
    user.creationDate.includes(searchTerm)
  );

  const ModalContent = () => {
    return (
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>{selectedUser.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>User Details</h5>
          <p><b>ID:</b> {selectedUser.id}</p>
          <p><b>Username:</b> {selectedUser.username}</p>
          <p><b>Email:</b> {selectedUser.email}</p>
          <p><b>Phone Number:</b> {selectedUser.phone}</p>
          <p><b>Address:</b> {selectedUser.address}</p>
          <p><b>Creation Date:</b> {selectedUser.creationDate}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={generateReport}>Generate Report</Button>
          <Button onClick={closeModal} variant='secondary'>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <div className='full-width-table'>
      <table className="table">
        <thead>
          <tr style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} onClick={() => handleRowClick(user)}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal ? <ModalContent /> : null}
      <ToastContainer theme="colored" />
    </div>
  );
};

export default UserTable;
