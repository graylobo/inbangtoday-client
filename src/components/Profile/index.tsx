import { createStyles, css } from "antd-style";
import React from "react";

const useStyles = createStyles(
  ({}) => css`
    .profile-card {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 10px;
      width: 300px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      text-align: left;
    }

    .profile-card h2 {
      margin-top: 0;
    }

    .profile-card p {
      margin: 10px 0;
    }

    .profile-card a {
      color: #007bff;
      text-decoration: none;
    }

    .profile-card a:hover {
      text-decoration: underline;
    }
  `
);

function Profile({ profile }: any) {
  const { styles } = useStyles();
  return (
    <div className="profile-card">
      <h2>{profile.rank}</h2>
      <p>
        <strong>이름:</strong> {profile.name}
      </p>
      <p>
        <strong>담당업무:</strong> {profile.duty}
      </p>
      <p>
        <strong>유튜브:</strong>{" "}
        <a href={profile.youtube} target="_blank" rel="noopener noreferrer">
          링크
        </a>
      </p>
      <p>
        <strong>인스타:</strong>{" "}
        <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
          링크
        </a>
      </p>
    </div>
  );
}

export default Profile;
