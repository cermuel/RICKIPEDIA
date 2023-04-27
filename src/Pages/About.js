import react from "react";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <div class="container">
        <h2 className="h2">What is this?</h2>
        <p>
          This is <b>RickiPedia</b> a site all about the <b>Rick and Morty</b>{" "}
          series ranging from all the <b>Characters</b> to their various{" "}
          <b>Locations</b> and so much more features{" "}
        </p>

        <br />
        <h2 className="h2">Who are you?</h2>
        <p>
          I am <b>Olamide Egbebi</b>, a guy who likes to develop things and a
          hardcore <b>Rick and Morty</b> fan{" "}
        </p>
        <br />
        <h2 className="h2">Why did you build this?</h2>
        <p>
          Because I was really interested in the idea of writing a{" "}
          <b>Rick and Morty</b> site and also because <b>Rick and Morty</b> is
          my favorite show at that moment, so why not?
        </p>
        <br />
        <h2 className="h2">Technical stuff?</h2>
        <p>
          I used <b>React Js, HTML, CSS, BootStrap 5 CSS</b> and an <b>API</b>{" "}
          that I got from{" "}
          <a href="https://rickandmortyapi.com" target="_blank">
            rickandmortyapi.com
          </a>
        </p>
        <br />
        {/* <h2 className="h2">How can I contribute to the project?</h2>
You can help us to keep the project alive and you can also contribute on GitHub. */}
        <h2 className="h2">How do I watch the show?</h2>
        <p>
          You can watch <b>Rick and Morty</b> on{" "}
          <a
            href="https://www.adultswim.com/videos/rick-and-morty"
            target="_blank"
          >
            Adult Swim
          </a>
        </p>
        <br />
        <h2 className="h2">Copyright?</h2>
        <p>
          <b>Rick and Morty</b> is a show created by <b>Justin Roiland</b> and{" "}
          <b>Dan Harmon</b> for Adult Swim. The data and images are gotten from{" "}
          <a href="https://rickandmortyapi.com" target="_blank">
            rickandmortyapi.com
          </a>{" "}
          and are used without claim of ownership.
        </p>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default About;
