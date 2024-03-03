import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import { img, logo, searchIcon } from "./images";
import SearchIcon from "./images/SearchIcon";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Public Sans', sans-serif",
    logo: logo,

    img: img,

    primaryColor: "#F8E7AB",
    secondaryColor: "#5E376D",
    accentColor: "#FCF1E9",
    heading: "We're hiring",
    postName: "Backend Developer",
    requirements: [
      "Both male/female",
      "2 Years experience",
      "Communicative",
      "Positive attitude",
    ],
    applyNow: {
      label: "Send your cv via email",
      email: "hello@rellygreatsite.com",
    },
  });

  return (
    <>
      <div
        style={{
          "--primaryColor": allData.primaryColor,
          "--secondaryColor": allData.secondaryColor,
          "--accentColor": allData.accentColor,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent
          {...allData}
          searchIcon={<SearchIcon color={allData.secondaryColor} />}
        />
      </div>
    </>
  );
}

export default App;
