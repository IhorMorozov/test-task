import React, { useState } from "react";
import Layout from "../../components/UI/Layout/Layout";
import ProfileList from "../../components/ProfileList/ProfileList";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import ColumnForm from "../../components/ColumnForm/ColumnForm";

const ProfilePage = () => {
  const [modal, setModal] = useState(false);

  return (
    <Layout>
      <Button buttonHandler={() => setModal(true)}>Select Columns</Button>
      <Modal visible={modal} setVisible={setModal}>
        <ColumnForm setVisible={setModal} />
      </Modal>
      <ProfileList />
    </Layout>
  );
};

export default ProfilePage;
