import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  randomAsync,
  selectRandomStatus,
  seletcRandom,
} from "./initializer.Slice";
import "./Initializer.css";

const Random = () => {
  const randomNum = useAppSelector(seletcRandom);
  const loadingNum = useAppSelector(selectRandomStatus);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{randomNum}</p>
      <button
        onClick={() => dispatch(randomAsync())}
        disabled={loadingNum !== "idle"}
      >
        {loadingNum !== "idle" ? (
          <span className="lds-dual-ring"></span>
        ) : (
          <span>Init From API</span>
        )}
      </button>
    </div>
  );
};

export default Random;
