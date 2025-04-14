import { IoShareSocialSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

function Card(props) {
  const data = props.arr;
  return (
    <>
      {data.map((obj) => {
        return (
          <div className="card">
            <div className="left">
              <p className="icons">
                <span><IoShareSocialSharp /></span>
                <span><FaHeart /></span>
                <span><FaMessage /></span>
              </p>
              <div className="upper">
                <img src={obj.image} alt="" />
                <div className="data">
                  <h1>{obj.name}</h1>
                  <p>{obj.release}</p>

                  <p className="time"><button>{obj.duration}</button> {obj.type}</p>
                </div>
              </div>
              <div className="lower">
                <p>{obj.description}</p>
              </div>
            </div>
            <div className="right">
              <img src={obj.poster} alt="" />
            </div>

            
          </div>
        );
      })}
    </>
  );
}

export default Card;
