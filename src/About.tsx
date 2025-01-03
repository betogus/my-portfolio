import { useEffect, useState } from "react";

const About = () => {

  interface Rec {
    description: string;
    value: number;
    postValue: string;
  }

  const [rec, setRec] = useState<Rec[]>([
    {
      description: "years experience",
      value: 1,
      postValue: "+",
    },
    {
      description: "simulations",
      value: 3,
      postValue: "",
    },
    {
      description: "projects",
      value: 23,
      postValue: "",
    },
    {
      description: "certificates",
      value: 12,
      postValue: "",
    },
    {
      description: "years of study",
      value: 3,
      postValue: "",
    },
    {
      description: "languages",
      value: 2,
      postValue: "",
    },
  ]);

  const countUp = () => {
    rec.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 1000; 
      const increment = end / (duration / 100);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setRec((prevRec) => {
          const newRec = [...prevRec];
          newRec[index].value = Math.floor(start);
          return newRec;
        });
      }, 100);
    });
  };

  useEffect(() => {
    countUp();
  }, []);

  return (
    <div
      className="flex gap-10 justify-start w-full flex-col items-center"
      style={{ minHeight: "calc(100vh - 6rem)", maxHeight: "calc(100vh - 6rem)" }}
    >
      <h1 className="text-white text-4xl mb-10 self-start mt-8">About</h1>
      <div className="flex justify-center items-center gap-12 flex-wrap w-1/2">
        {rec.map((item) => (
          <div className="bg-button w-48 h-40 rounded-3xl flex flex-col items-center justify-center p-5 min-w-fit">
            <p className="text-6xl text-white">
              {item.value} {item.postValue}
            </p>
            <p className="text-lg text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-wrap w-1/2 gap-x-6 gap-y-2">
        <p className="text-4xl text-white">Passionate</p>
        <p className="text-2xl text-gray-400">Collaborative</p>
        <p className="text-lg text-gray-700">Independent</p>
        <p className="text-2xl text-gray-400">Self-motivated</p>
        <p className="text-lg text-gray-700">Continuous learner</p>
        <p className="text-4xl text-white">Initiative-taker</p>
        <p className="text-lg text-gray-700">Communicative</p>
        <p className="text-2xl text-gray-400">Leadership-oriented</p>
        <p className="text-lg text-gray-700">Responsible</p>
        <p className="text-2xl text-gray-400">Problem-solver</p>
        <p className="text-4xl text-white">Proactive</p>
      </div>
    </div>
  );
};

export default About;
