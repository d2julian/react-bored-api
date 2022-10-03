import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import classes from "./FilterInput.module.css";
type Props = {
  setFilter: Dispatch<SetStateAction<string>>;
  refetchData: () => void;
};

const FilterInput = ({ setFilter, refetchData }: Props) => {
  const [showFilter, setShowFilter] = useState(true);
  const handlerImgClick = () => {
    setShowFilter((prevState) => !prevState);
    setFilter("");
  };
  return (
    <div className={classes.container}>
      {!showFilter ? (
        <img onClick={handlerImgClick} className={classes.iconShow} src={`../assets/show.jpg`} alt={"show"} />
      ) : (
        <img onClick={handlerImgClick} className={classes.iconShow} src={`../assets/hide.jpg`} alt={"hide"} />
      )}
      {showFilter && (
        <>
          <div className={classes.searchContainer}>
            <input className={classes.searchInput} placeholder="Filter by Activity or Type" onChange={(e) => setFilter(e.target.value)}></input>
            <img className={classes.iconImg} src={`../assets/search.jpg`} alt={"search"} />
          </div>
          <button className={classes.reloadButton} onClick={() => refetchData()}>
            More Activities!
          </button>
        </>
      )}
    </div>
  );
};

export default FilterInput;
