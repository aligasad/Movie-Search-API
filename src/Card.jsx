import { IoShareSocialSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

function Card(props) {
  const data = props.arr;
  const imgUrl = props.url;
  // function trimTitle(title, len) {
  //   return title.lenght > len ? title.split(" ").splice(0, len + 1).join(" ") : title
  // }

  function trimContent(title, length) {
    return title.length > length
      ? title
          .split(" ")
          .slice(0, length - 1)
          .join(" ") + "..."
      : title;
  }

  return (
    <>
      {data.map((obj) => {
        return (
          <div key={obj.id} className="card">
            <div className="left">
              <p className="icons">
                <span>
                  <IoShareSocialSharp />
                </span>
                <span>
                  <FaHeart />
                </span>
                <span>
                  <FaMessage />
                </span>
              </p>
              <div className="upper">
                <img src={imgUrl + "" + obj.poster_path} alt="" />
                <div className="data">
                  <h1>{trimContent(obj.original_title, 4)}</h1>
                  <p>{obj.release_date}</p>

                  <p className="time">
                    <button>{obj.popularity}</button> {trimContent(obj.title, 4)}
                  </p>
                </div>
              </div>
              <div className="lower">
                <p>{trimContent(obj.overview, 20)}</p>
              </div>
            </div>
            <div className="right">
              <img src={imgUrl + "" + obj.backdrop_path} alt="image not found" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
