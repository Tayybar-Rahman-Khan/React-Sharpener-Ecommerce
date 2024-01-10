import Profile from "./Profile";
import classes from './UserProfile.module.css';
const UserProfile = () => {
    return (
      <section className={classes.profile}>
        <h1>Your User Profile</h1>
        <Profile />
      </section>
    );
  };

  export default UserProfile;
