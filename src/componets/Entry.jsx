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
        <a href={props.location} rel="location" className="location">
          View on Goolge Maps
        </a>
        <h2 className="entry-title"> {props.entry_title}</h2>
        <p className="trip-dates">{props.trip_date}</p>
        <p className="entry-text">{props.entry_text}</p>
      </div>
    </article>
  );
}

export default Entry;
