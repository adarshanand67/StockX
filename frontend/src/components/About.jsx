import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  const description1 =
    "💡I am a Full-stack developer with a passion for problem-solving. I love working on backend and frontend projects, but my true love is React.js. I enjoy working on projects that are challenging and have the potential to make a positive impact on people's lives.";

  const description2 =
    "I am a CSE pre-final year Undergrad at IIT Goa. I have experience in various Tech Domains such as Web Development, App Development, Deep Learning.";
  return (
    <div className="bg-gray-200 p-4">
      <div className="flex flex-wrap justify-center mt-4">
        <AboutCard
          name="Adarsh Anand"
          designation="DSC Lead '22 | Foss Overflow Mentor | Postman Leader | MERN | 4⭐CC | IIT Goa CSE '24"
          description={description1}
          image="https://avatars.githubusercontent.com/u/73928744?v=4"
          linkedin="https://www.linkedin.com/in/adarsh-anand-iitgoa/"
          github="https://github.com/adarshanand67"
        />

        <AboutCard
          name="Aniket Akshay Chaudhri"
          designation="Head @ Coding Club IIT Goa | Competitive Programmer | Web Developer | Android Developer | CSE @ IIT Goa
"
          description={description2}
          image="https://media.licdn.com/dms/image/C4E03AQFLcae-iALHCA/profile-displayphoto-shrink_400_400/0/1648622038996?e=1679529600&v=beta&t=wJepL-9yevbKjwwg8hytxWCp8CxTVLUg9F4RjbPvZCs"
          linkedin="https://www.linkedin.com/in/aniketchaudhri/"
          github="https://github.com/AniketChaudhri/"
        />
      </div>
    </div>
  );
};

export default About;
