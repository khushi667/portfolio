import reactjs from "/reactjs.png";
import mongodb from "/mongodb.jpg";
import express from "/express.png";
import node from "/node.png";
import html from "/html.png";
import css from "/css.jpg";
import javascript from "/javascript.png";

function Experiance() {
  const cardItem = [
    {
        id: 1,
        logo: reactjs,
        name: "React",
      },
    {
      id: 2,
      logo: mongodb,
      name: "MongoDb",
    },
    {
      id: 3,
      logo: express,
      name: "ExpressJs",
    },
    {
      id: 4,
      logo: node,
      name: "NodeJs",
    },
    {
      id: 5,
      logo: html,
      name: "Html",
    },
    {
        id: 6,
        logo: css,
        name: "CSS",
      },
      {
        id: 7,
        logo: javascript,
        name: "JavaScript",
      },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
        Through self-learning and online courses, I have acquired knowledge in MongoDB, ExpressJs, ReactJs and NodeJs, which I have applied in various projects.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
