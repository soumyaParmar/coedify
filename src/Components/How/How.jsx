import React from 'react'
import "./How.css"
import First from "./First__step.svg";
import Second from "./Second__step.svg";
import Third from "./Third__step.svg";
import Fourth from "./Fourth__step.svg";

function How() {
    return (
        <div className="how">
            <h1 className="how__mainHeading">This is How We Work?</h1>
            <div className="how1">
                <div className="how1__left">
                    <h1 className="how__heading">1. First Step Heading</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus convallis neque morbi est platea mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus convallis neque morbi est platea mauris. E Et dolor venenatis aliquet libero lorem. Nibh adipiscing id nullam ac gravida elementum in. Accumsan duius convallis neque morbi est platea mauris. E Et dolor venenatis aliquet libero lorem. Nibh adipiscing id nullam ac gravida elementum in. Accumsan duis id urna ac blandit fermentum mollis ut.</p>
                </div>
                <div className="how1__right">
                    <img src={First} alt="imag" />
                </div>
            </div>
            <div className="how2">
                <div className="how2__left">
                    <img src={Second} alt="img2"/>
                </div>
                <div className="how2__right">
                <h1 className="how__heading">2. Second Step Heading</h1>
                <p>amet, consectetur adipiscing elit. Rhoncus convallis neque morbi est platea mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus convallis neque morbi est platea mauris. E Et dolor venenatis aliquet libero lorem. Nibh adipiscing id nullam ac gravida elementum in. Accumsan duius convallis neque morbi est platea mauris. E Et dolor venenatis aliquet libero lorem. Nibh adipiscing id nullam ac gravida elementum in. Accumsan duis id urna ac blandit fermentum mollis utiquet libero lorem. Nibh adipiscing id nullam ac gravida elementum in. Accumsan duis id urna ac blandit fermentum mollis ut.</p>
                </div>
            </div>
            <div className="how3">
                <div className="how3__left">
                <h1 className="how__heading">3. Third Step Heading</h1>
                <p>Lamet, consectetur adipiscing elit. Rhoncus convallis neque morbi est platea mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus convallis neque morbi est platea mauris. E Et dolor venenatis aliquet libero lorem. Nibh adipiscing id nullam ac gravida elementum in. Accumsan duius convallis neque morbi est platea mauris. E Et dolor venenatis aliquet libero lorem. Nibh adipiscing id nullam ac gravida elementum in. Accumsan duis id urna ac blandit fermentum mollis utllis ut.</p>
                </div>
                <div className="how3__right">
                    <img src={Third} alt="img3"/>
                </div>
            </div>
            <div className="how2">
                <div className="how2__left">

                <img src={Fourth} alt="img4"/>
                </div>
                <div className="how2__right">
                <h1 className="how__heading">4. Fourth Step Heading</h1>
                <p>amet, consectetur adipiscing elit. Rhoncus convallis neque morbi est platea mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus convallis neque morbi est platea mauris. E Et dolor venenatis aliquet libero lorem. Nibh adipiscing id nullam ac gravida elementum in. Accumsan duius convallis neque morbi est platea mauris. E Et dolor venenatis aliquet libero lorem. Nibh adipiscing id nullam ac gravida elementum in. Accumsan duis id urna ac blandit fermentum mollis utmollis ut.</p>
                </div>
            </div>
        </div>
    )
}

export default How
