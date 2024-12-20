import Img from "./assets/photo.png";
import { GoDownload } from "react-icons/go";

const Home = () => {
  return (
    <div className="min-w-screen flex flex-col justify-center items-center gap-20" style={{minHeight: "calc(100vh - 6rem)"}}>
      <div className="flex justify-center items-center w-full">
        <div className="w-2/3 flex-col items-center pl-6">
            <p className="text-white text-6xl">Gustavo Torres</p>
            <h2 className="text-secondary text-5xl pl-10">
              Full Stack Web Developer
            </h2>
        </div>
        <div className="w-1/3 justify-center flex">
          <img className="rounded-full size-72" src={Img} />
        </div>
      </div>
      <div className="w-1/2">
        <p className="text-white text-3xl text-center">
          I am a Web Developer who specializes in both front-end and back-end
          and applications using React Js, React Native, Node Js, Express, and
          MongoDB.
        </p>
      </div>
      <div className="flex justify-start w-full">
        <div className="w-44 h-12 ml-6 border-secondary border-2 rounded-full flex items-center text-white justify-evenly p-5">
          <GoDownload size={24} /> <p>Check my CV</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
