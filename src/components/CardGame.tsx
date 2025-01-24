import React from "react";

interface Iprops {
  image: string;
  content: string;
  name: string;
}

const CardGame: React.FC<Iprops> = (props) => {
  return (
    <div className="flex justify-center relative w-full ">
      <div className="shadow-xl my-2 xl:my-5 rounded-xl">
        <img
          className=" w-full h-[268px] md:h-[560px] rounded-xl  shadow-xl "
          src={props.image}
          alt="card game"
        />
        <p className="absolute font-first  font-bold bottom-[100px] left-[15px] text-3xl xl:text-5xl text-white px-4">
          {props.name}
        </p>
        <p className="absolute font-first  bottom-[40px] left-[15px] text-md text-white leading-4 line-clamp-3 px-4">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default CardGame;
