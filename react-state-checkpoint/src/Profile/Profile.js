import React from "react";
import './profileCss.css';
import imgDefault from '../Default-pic.png';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
          hh: 0,
          mm: 0,
          ss: 0,
          ms: 0,
          start: false
        };
        setInterval(() => {
          if (this.state.start)
            this.setState({
              ms: this.state.ms + 1000,
              hh: parseInt(this.state.ms / 3600000),
              mm: parseInt((this.state.ms % 3600000) / 60000),
              ss: parseInt(((this.state.ms % 3600000) % 60000) / 1000)
            });
        }, 1000);
    }
    
    componentDidMount() {
        this.setState({
            start: !this.state.start
        });
    }

  render() {
    return (
        <div>
            <div className="row timer">
                <div className="col-sm-1">
                    {String(this.state.hh).padStart(2, "0")}
                </div>
                <div className="col-ss-1">:</div>
                <div className="col-sm-1">
                    {String(this.state.mm).padStart(2, "0")}
                </div>
                <div className="col-ss-1">:</div>
                <div className="col-sm-1">
                    {String(this.state.ss).padStart(2, "0")}
                </div>
            </div>
            <div className="Container">
                <div className="imgProfile">
                    <img src={this.props.imgSrc} className="imgProfileImg" alt=""/>
                </div>
                <div className="name">
                    <h1>{this.props.fullName}</h1>
                </div>
                <div className="bio">
                    <label>Bio :</label>
                    <p>{this.props.bio}</p>
                </div>
                <div className="profession">
                    <label>Profession :</label>
                    <p>{this.props.profession}</p>
                </div>
            </div>  
        </div>
        
    )
  }
}

// Set default props
Profile.defaultProps = {
    bio: 'Your Bio',
    fullName: "Full Name",
    profession: 'Your Profession',
    imgSrc: imgDefault,
}

export default Profile