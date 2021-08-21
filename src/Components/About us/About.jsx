import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div className="about" id="aboutUs">
        <div className="about__left">
          <img
            src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="about__right">
          <h1>About Us</h1>
          <span>
            Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
            sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et
            tiram. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam in praesentium deserunt atque quo odit expedita obcaecati
            repellat. Optio ducimus necessitatibus illo ipsa quaerat aliquam
            explicabo autem ullam iste perferendis?
          </span>
          <h2>Who We Are</h2>
          <span>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sequi in dicta maiores praesentium
            odit id, necessitatibus modi possimus placeat nostrum totam dolore,
            corporis quasi aperiam sint, beatae illo magni repellat?
          </span>
          <h2>Our History</h2>
          <span>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ut optio odio, error excepturi blanditiis nisi iure dolor in
            doloribus rem asperiores laboriosam voluptatum iusto sequi
            cupiditate, est possimus. Nostrum, at.
          </span>
          <h2>Our Mission</h2>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
