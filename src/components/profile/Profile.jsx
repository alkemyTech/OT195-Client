import React, { useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";

import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";

export default function Profile() {
  const [editView, setEditView] = useState(false);
  const user = useSelector(({ user }) => user.entity); // me va traer lo que tiene user
  // console.log(user)
  const { data: detailsData, loading: detailsLoading } = useFetch(  // hook peronalizado que voy utilizar para traer el user por su id
    process.env.REACT_APP_USERS_ENDPOINT + user.id
  );
  // console.log(detailsLoading ? [] : detailsData.result) // en este console.log va mostrar un array vacio si hay  detailsLoading sino va mostrar detailsData.result

  if (editView === false) { // si es false muestra ProfileView.jsx
    return (
      <div>
        <ProfileView setEditView={setEditView} userData={detailsLoading ? user : detailsData.result} />  
      </div>
    );
  }

  return ( // si es true muestra ProfileEdit.jsx
    <div>
      <ProfileEdit setEditView={setEditView} userData={detailsLoading ? user : detailsData.result} />
    </div>
  );
}
