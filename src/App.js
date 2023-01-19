import { useEffect, useState } from "react";
import MusicComponent from "./Component/MusicComponent";
import "./App.css";

export default function App() {
  const [indexOf, setIndexOf] = useState(0);
  const backword = () => {
    setIndexOf(indexOf - 1);
    console.log(setIndexOf);
  };

  const [musicData, setMusicData] = useState([]);
  const getMusicData = async () => {
    const musicApi = await fetch(
      `https://api.napster.com/v2.1/tracks/top?apikey=ZWE4NjZlYmEtMTlkNi00NDQwLWE5ZDgtMWNhOTE2NDYyNjFk`
    );
    console.log(musicApi);

    const response = await musicApi.json();
    console.log(response);

    const aa = Object.values(response.tracks);
   

    setMusicData(aa);
  };

  useEffect(() => {
    getMusicData();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {musicData.map((item, index) => {
        console.log(item.name);

        return <MusicComponent value={item} key={index} />;
      })}
      <div className="bottom">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUS0UKYJuZbUrCmJM1ZShxe_tM2IW6KCvE7w&usqp=CAU"
          width="50px"
          onClick={backword}
        />
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/pause-button-icon.png"
          width="50px"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuIddyxdEvbBanjxJT2T-Km7sdt6QYMy6sg&usqp=CAUhttps://png.pngtree.com/element_our/20190528/ourmid/pngtree-fast-forward-icon-image_1128381.jpg"
          width="50px"
        />
      </div>
    </div>
  );
}

