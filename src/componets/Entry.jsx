function Entry(props) {
  // console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-containor">
        <img
          className="main-image"
          src={props.entry.img.src}
          alt={props.entry.img.alt}
        />
      </div>
      <div className="info-containor">
        <img
          src="./src/images/Marker.png"
          rel="map-marker-icon"
          className="marker"
        />
        <span className="country">{props.entry.country}</span>
        <a href={props.entry.loaction} rel="loacation" className="location">
          View on Goolge Maps
        </a>
        <h2 className="entry-title"> {props.entry.entry_title}</h2>
        <p className="trip-dates">{props.entry.trip_date}</p>
        <p className="entry-text">{props.entry.entry_text}</p>
      </div>
    </article>
  );
}

export default Entry;
