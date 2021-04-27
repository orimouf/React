import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpg';
import video from './myVideo.mkv';

const img = {
  width: "100%",
  height: "250px"
}

function App() {
  return (
    <div className="App">
      <div className="grid" style={{border:"solid 1px black",maxWidth:"100vw",padding: "20px"}}>
        <h1 className="title red">Harrouche Amir</h1>
        <img className="img1" src={imageInSrc} style={img} alt="" />
        <img className="img2" src="/imageInPublic.jpg" style={img} alt="" />
      </div>
      <video width="320" height="240" controls autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
