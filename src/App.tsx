import { CiCircleChevDown } from "react-icons/ci";
import Home from "./Home";
const secondaryColor = '#00DF70';

function App() {
  return (
    <div className="bg-primary min-h-screen px-48 flex flex-col items-center">
      <Home/>
      <div className="h-10 w-10 rounded-full border-secondary">
        <CiCircleChevDown color={secondaryColor} size={90}/>
      </div>
    </div>
  );
}

export default App;
