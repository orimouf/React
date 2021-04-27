import './Header.css';

const Active = {color: "#61d0d4"}

const Header = (props) => {
  return (
    <div className="header Grid-1">
      <h1>{props.name}</h1>
      <h3>{props.job}</h3>
      <div>
        <a className="a-1" href="#" style={Active}>HOME</a>
        <a className="a-2" href="#">RESUME</a>
        <a className="a-3" href="#">PROJECTS</a>
        <a className="a-4" href="#">CONTACT</a>
      </div>
    </div>
  );
}

export default Header