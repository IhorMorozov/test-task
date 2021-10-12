import React, { useState } from 'react';
import Layout from '../../components/UI/Layout/Layout';
import ProfileList from '../../components/ProfileList/ProfileList';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import ColumnForm from '../../components/ColumnForm/ColumnForm';
import Context from '../../context/context';

const ProfilePage = () => {
  const [modal, setModal] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    {
      title: 'Profile Name',
      value: 'name',
      checked: localStorage.getItem('name') || 'false',
    },
    {
      title: 'Creation Date',
      value: 'date',
      checked: localStorage.getItem('date') || 'false',
    },
    {
      title: 'Status',
      value: 'status',
      checked: localStorage.getItem('status') || 'false',
    },
    {
      title: 'Salary',
      value: 'salary',
      checked: localStorage.getItem('salary') || 'false',
    },
    {
      title: 'Work-Life Balance',
      value: 'balance',
      checked: localStorage.getItem('balance') || 'false',
    },
    {
      title: 'Happiness',
      value: 'happiness',
      checked: localStorage.getItem('happiness') || 'false',
    },
    {
      title: 'Favorite Color',
      value: 'color',
      checked: localStorage.getItem('color') || 'false',
    },
  ]);
  checkboxes.map((checkbox) => {
    localStorage.setItem(
      checkbox.value,
      localStorage.getItem(checkbox.value) || 'false'
    );
  });
  localStorage.setItem('sort', localStorage.getItem('sort') || 'name');

  return (
    <Context.Provider value={{ checkboxes, setCheckboxes }}>
      <Layout>
        <Button buttonHandler={() => setModal(true)}>Select Columns</Button>
        <Modal visible={modal} setVisible={setModal}>
          <ColumnForm setVisible={setModal} />
        </Modal>
        <ProfileList />
      </Layout>
    </Context.Provider>
  );
};

export default ProfilePage;
