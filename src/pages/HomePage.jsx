import babyWordImg from "../assets/baby_word.png";
import infantImg from "../assets/infant.png";

export default function HomePage() {
  return (
    <div className="container text-center">
      <img
        className="mt-5"
        src={babyWordImg}
        style={{ width: "400px" }}
        alt=""
      />
      <h1 className="mt-1">寶寶用品店</h1>
      <img src={infantImg} style={{ width: "400px" }} alt="" />
    </div>
  );
}
