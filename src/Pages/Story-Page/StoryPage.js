import "./StoryPage.css";

export default function StoryPage() {
  return (
    <div className="container-story-page">
      <div className="container-story-title">
        <h1>OUR STORY</h1>
      </div>
      <div className="container-story-hero-image">
        <div className="story-hero-image-wrapper">
          <img src={require("../../Assets/Images/Story.jpg")} alt="storey" />
        </div>
      </div>
      <div className="container-story-text">
        <p>
          Nr6 was founded in 2019 by two friends based in Norwich who wanted to
          design their own bike and wheels what would be strong enough and light
          enough to handle the demands of endurance racing such as RAW and RAAM
          at a reasonable price without compromising on quality. The prototype
          was so successful that while out on training rides people wanted to
          know more about the bike and wheels and where they could purchase
          them. After refining the prototypes and getting the wheels tested and
          approved by the UCI NR6 was launched.
        </p>
        <p>
          Since Launching the company has grown from strength to strength and is
          now the company of choice for many high-end athletes and race teams
          such as Saskia Tidey world and european silver medallist, JRC Inteflon
          national cycling development team and members of the RAF Enduro team.
        </p>
      </div>
    </div>
  );
}
