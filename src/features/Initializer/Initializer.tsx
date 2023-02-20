import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { randomAsync, seletcRandom } from "./initializer.Slice";

const Random = () => {
  const randomNum = useAppSelector(seletcRandom);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{randomNum}</p>
      <button className="random-button" onClick={() => dispatch(randomAsync())}>
        Init From API
      </button>
    </div>
  );
};

export default Random;
