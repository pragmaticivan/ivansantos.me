import React from "react";
import "./style.scss";

const GeneralDescription = () => (
  <div className="GeneralDescription">
    <div className="picture">
      <img src="https://avatars2.githubusercontent.com/u/301291?s=400&v=4" alt="Ivan Santos Jr"/>
    </div>
    <div className="content">
      <div>
        <p>
          Born and raised in Brazil, in a tropical state called Alagoas, I
          discovered a love for technology at young age, by playing with computer
          hardware. With years later I have delved into software development, and
          have challenged myself to develop many projects.
        </p>
        <p>
          I currently work developing universal web applications with Javascript
          and APIs with Go. I also love to play with docker-related projects.
        </p>
        <p>Presently I live in Austin-TX, and work for Episource LLC.</p>
      </div>
      <div>
        <p>
          When I’m not at my computer, I love to travel and capture everything
          through my camera lens. Not looking to be a professional, but just
          another memory-lover who wants to remember how awesome life is.
        </p>
        <p>
          In my free time I try to learn different styles of dance, but my
          favorite style so far is Lindy Hop!
        </p>
        <p>Fun fact: My dog knows how to dance.</p>
      </div>
    </div>
  </div>
);

export default GeneralDescription;
