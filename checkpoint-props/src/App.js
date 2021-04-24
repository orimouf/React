import './App.css';
import './Profile/profileCss.css';
import ProfileComponent from './Profile/ProfileComponent';
import imgProfile from './ProfilePhoto.jpg';

const data = {
  bio: 'https://www.amir.com',
  fullName: "Harrouche Amir",
  profession: 'web developer',
  profilePic: imgProfile,
}
const handleName = () => {
  alert(data.fullName)
}

function App() {
  return (
    <div className="App">
      <ProfileComponent imgProfile={data.profilePic} 
    fullName={data.fullName} profession={data.profession}
     bio={data.bio} onClick={handleName}/>
    </div>
  );
}

export default App;
