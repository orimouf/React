import './Main.css';
import avatar from '../../assets/data/avatar.jpg'

const Main = (props) => {
  return (
    <div className="main Grid-1">
      <div>
          <div className="img"><img src={avatar} /></div>
      </div>
      <div>
        <h1>Hello,</h1>
        <h2>a bit about me: </h2>
        <div className="about">
            <a href="#"><div className="resume">MY RESUME</div></a>
            <a href="#"><div className="works">MY WORKS</div></a>
            <a href="#"><div className="skills">MY SKILLS</div></a>
        </div>
        <p>
            I am here to show you why react.js is so powerful 
            to buld you're web applications, and why you
            should become a developer!
        </p>
      </div>
    </div>
  );
}

export default Main