import React from 'react';
import { useState } from 'react';

const Profile: React.FC = () => {
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [popup, setpopup]=useState(false);
  const [profileData,setProfileData]=useState({
    fullname: 'John Doe',
    Username:'@johndoe',
    email:'john.doe@example.com'
  })
  const[originalData,setoriginalData]=useState({...profileData})
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if( !currentPassword ){
    alert('Current password is required.');
    return;
  }
  if( !newPassword ){
    alert('New password is required.');
    return;
  }
  if (newPassword.length < 8) {
    alert('New password must be at least 8 characters long.');
    return;
  }
  if (!/[A-Z]/.test(newPassword)) {
    alert('New password must contain at least one uppercase letter.');
    return;
  }
  if (!/[a-z]/.test(newPassword)) {
    alert('New password must contain at least one lowercase letter.');
    return;
  }
  if (!/[0-9]/.test(newPassword)) {
    alert('New password must contain at least one number.');
    return;
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
    alert('New password must contain at least one special character.');
    return;
  }
  if (currentPassword.length < 8) {
    alert('Current password must be at least 8 characters long.');
    return;
  }
  if(!currentPassword && !newPassword){
    alert('Both current and new passwords are required.');
  }

  if (currentPassword === newPassword) {
    alert('New password must be different from current password.');
    return;
  }


  // Proceed with password update logic (e.g., API call)
  alert('Password updated successfully!');
};


  return (
    <div className="profile-container">
  <div className="navbar">
  <span className="brand">Taskify</span>
  <div className="navbar-right">
    <a href="#" className="nav-link ">
  {/* Tasks Icon */}
      <svg className="icon" width="18" height="18" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="2" rx="1" fill="#2563eb"/>
        <rect x="3" y="11" width="18" height="2" rx="1" fill="#2563eb"/>
        <rect x="3" y="17" width="18" height="2" rx="1" fill="#2563eb"/>
      </svg>
      Tasks
    </a>
    <a href="#" className="nav-link">
      {/* Notes Icon */}
      <svg className="icon" width="18" height="18" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="#2563eb"/>
        <rect x="7" y="8" width="10" height="2" rx="1" fill="#fff"/>
        <rect x="7" y="12" width="6" height="2" rx="1" fill="#fff"/>
      </svg>
      Notes
    </a>
    <a href="#" className="nav-link active">
      {/*  Profile Icon */}
      <svg className="icon" width="18" height="18" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" fill="#2563eb"/>
        <rect x="6" y="15" width="12" height="5" rx="2.5" fill="#2563eb"/>
      </svg>
      Profile
    </a>
    <button className="logout-btn">
      {/*  Logout Icon */}
      <svg className="icon" width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M16 17l5-5m0 0l-5-5m5 5H9" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 4v16" stroke="#222" stroke-width="2" stroke-linecap="round"/>
      </svg>
      Logout
    </button>
  </div>
</div>

    <h1 className = "myprofile">My Profile</h1><br/>
    <hr/>

    <div>
        <h2>{profileData.fullname}</h2>
        <br/> 
        <p className="uid">{profileData.Username}</p>
        <br/>
        <div className="editing">
        <p className="eid"><i className="fas fa-envelope"></i> {profileData.email}</p>
        <button className="edit-btn" onClick={() => setpopup(true)}>Edit Profile</button>
        </div>
        <br/>
        <button className="user-btn">User</button>
    </div>
    <br/>
<hr/>
    <div>
        <h3>Personal Information</h3>
      <div>
  <p style={{ color: "#9ca3af", fontSize: "17px" }}>Full name</p>
  <p style={{ color: "#000000",fontSize: "20px" }}>{profileData.fullname}</p>
</div><br/>

<div className="labels1">
  <p style={{ color: "#9ca3af", fontSize: "17px" }}>Username</p>
  <p style={{ color: "#9ca3af", fontSize: "17px" }}>Email</p>
</div>

<div className="password-change1">
  <p style={{ color: "#000000", fontSize: "20px" }}>{profileData.Username}</p>
  <p style={{color: "#000000", fontSize: "20px" }}>{profileData.email}</p>
</div>

    </div >
<hr/>
 <div>
  <h3>Change Password</h3>
  <form onSubmit={handleSubmit}>

    <div className="labels">
      <label htmlFor="current-password">Current Password</label>
      <label htmlFor="new-password">New Password</label>
    </div>

    <div className="password-change">
      <div className="input-group">
        <i className="fas fa-lock"></i>
        <input
         type="password"
         id="current-password"
         className="c-password"
         placeholder="Enter current password"
         value={currentPassword}
         onChange={(e) => setCurrentPassword(e.target.value)}
/>
      </div>

      <div className="input-group">
        <i className="fas fa-lock"></i>
        <input
        type="password"
        id="new-password"
        className="n-password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
    </div>
    <br/>

    <button type="submit" className="submit-btn">
      Update Password
    </button>
  </form>
</div>
{popup && (
  <div className="modal-backdrop">
    <div className="modal-box">
      <h3>Edit Profile</h3>

      <label htmlFor="fullName" className="modal-label">Full Name</label>
      <input
        id="fullName"
        type="text"
        value={profileData.fullname}
        onChange={(e) => setProfileData({ ...profileData, fullname: e.target.value })}
        placeholder="Enter full name"
        className="modal-input"
      />

      <label htmlFor="username" className="modal-label">Username</label>
      <input
        id="username"
        type="text"
        value={profileData.Username}
        onChange={(e) => setProfileData({ ...profileData, Username: e.target.value })}
        placeholder="Enter username"
        className="modal-input"
      />

      <label htmlFor="email" className="modal-label">Email</label>
      <input
        id="email"
        type="email"
        value={profileData.email}
        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
        placeholder="Enter email"
        className="modal-input"
      />

      <div className="modal-actions">
        <button className="cancel-btn" onClick={() => {
          setpopup(false);
          setProfileData({ ...originalData });
        }}>Cancel</button>
        <button className="save-btn" onClick={() => {
          alert('Profile updated!');
          setpopup(false);
          setoriginalData({...profileData});
        }}>
          Save
        </button>
      </div>
    </div>
  </div>
)}


</div>
);
}

export default Profile;
