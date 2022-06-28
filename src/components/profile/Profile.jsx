import React, { useState } from "react";
import { useSelector } from "react-redux";

import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";

export default function Profile() {
  const [editView, setEditView] = useState(false);
  const user = useSelector(({ user }) => user.entity);

  if (editView === false) {
    return (
      <div>
        <ProfileView setEditView={setEditView} userData={user} />
      </div>
    );
  }

  return (
    <div>
      <ProfileEdit setEditView={setEditView} userData={user} />
    </div>
  );
}
