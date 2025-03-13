import styles from "./Netflix.module.css"
export function Card(props) {
  console.log(props);
  /*1st way */
  /*const {data} =props */
  /*2nd way */
  /*const{id,img_url,name,rating,description,cast,genre,watch_url}=props.data; */
  const roshan = {
    padding: "0.2rem 1.4rem",
    border: "none",
    fontSize: "1.0rem",
    backgroundColor: `${props.data.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "white",
    fontWeight:"bold",
    cursor:"pointer",
  };
  const ratingclass= props.data.rating >= 8.5 ? "super_hit" : "average"
  
  return (
    <li className="card">
      <div>
        <img src="Roshan.jpg" alt="Roshan.jpg" width="40%" height="40%"></img>
      </div>
      <div className="card-content">
        <h1 style={{ margin: "1.2rem 0" }}>{props.data.name}</h1>
        <h3>
          Rating:{" "}
        {/*  <span className={`rating ${props.data.rating >= 8.5 ? "super_hit" : "average"}`}>*/}
        <span className={`rating ${ratingclass}`}>
            {props.data.rating}
          </span>{" "}
        </h3>
        <p style={{ margin: "1.2rem 0" }}>Summary: {props.data.description}</p>
        <p style={{ margin: "1.2rem 0" }}>Genre:{props.data.genre}</p>
        <p style={{ margin: "1.2rem 0" }}>Caste:{props.data.cast}</p>

        <a href={props.data.watch_url} target="_blank" rel="noreferrer">
          <button style={roshan}>Watch now</button>
        </a>
      </div>
    </li>
  );
}
