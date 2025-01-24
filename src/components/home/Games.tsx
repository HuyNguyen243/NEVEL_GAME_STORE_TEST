import { MOCK_GAME_DATA } from "@/shared/data/games";
import { SECTION_ID } from "@/shared/types/header";
import CardGame from "../CardGame";

const GamesComponent = () => {
  const length = MOCK_GAME_DATA.length;
  const mediumLength = Math.ceil(length / 4);
  const section_1 = [0, mediumLength];
  const section_2 = [mediumLength, mediumLength * 2];
  const section_3 = [mediumLength * 2, mediumLength * 3];
  const section_4 = [mediumLength * 3, mediumLength * 4];

  return (
    <div id={SECTION_ID.GAMES} className="flex items-center justify-center ">
      <div className="block md:block xl:flex ">
        {/* MOCK_1 */}
        <div className="flex-col mx-2 xl:mx-4">
          {MOCK_GAME_DATA.slice(section_1[0], section_1[1]).map(
            (item, index) => (
              <CardGame
                key={index}
                image={item.image}
                content={item.content}
                name={item.name}
              />
            )
          )}
        </div>
        {/* MOCK_2 */}
        <div className="flex-col mx-2 xl:mx-4  xl:mt-28">
          {MOCK_GAME_DATA.slice(section_2[0], section_2[1]).map(
            (item, index) => (
              <CardGame
                key={index}
                image={item.image}
                content={item.content}
                name={item.name}
              />
            )
          )}
        </div>
      </div>
      <div className="block md:block xl:flex mt-32 xl:mt-0 ">
        {/* MOCK_3 */}
        <div className="flex-col mx-2 xl:mx-4">
          {MOCK_GAME_DATA.slice(section_3[0], section_3[1]).map(
            (item, index) => (
              <CardGame
                key={index}
                image={item.image}
                content={item.content}
                name={item.name}
              />
            )
          )}
        </div>
        {/* MOCK_4 */}
        <div className="flex-col mx-2 xl:mx-4  xl:mt-28">
          {MOCK_GAME_DATA.slice(section_4[0], section_4[1]).map(
            (item, index) => (
              <CardGame
                key={index}
                image={item.image}
                content={item.content}
                name={item.name}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default GamesComponent;
