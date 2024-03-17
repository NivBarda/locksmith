import Navbar from "./components/Navbar";
import BackgroundCover from "./components/BackgroundCover";
import BodyItem from "./components/BodyItem";
import image from "./images/cover.jpg";
import sImage from "./images/second.jpg";
function App() {
  const items = [
    {
      id: 1,
      image: image,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in libero at sem fringilla sodales in vel metus. Cras eu fringilla neque.",
    },
    {
      id: 2,
      image: sImage,
      title:
        " sit amet, cem fringus. Cras eu fringilla neque.",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <BackgroundCover />
      {items.map((item) => {
        return <BodyItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
