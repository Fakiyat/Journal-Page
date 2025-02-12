function Entry(props) {
  // console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-containor">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info-containor">
        <img
          src="./src/images/Marker.png"
          rel="map-marker-icon"
          className="marker"
        />
        <span className="country">{props.country}</span>
        <a href={props.loaction} rel="loacation" className="location">
          View on Goolge Maps
        </a>
        <h2 className="entry-title"> {props.title}</h2>
        <p className="trip-dates">{props.date}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}

export default Entry;
