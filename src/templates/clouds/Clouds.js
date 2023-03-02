import './Clouds.css';

function Clouds(props) {

    let background = props.url;
    

  return (
    <div id="background-wrap" style={{ backgroundImage: `url(${background})` }}>
      <div class="x1">
        <div class="cloud"> </div>{" "}
      </div>
      <div class="x2">
        <div class="cloud"> </div>{" "}
      </div>
      <div class="x3">
        <div class="cloud"> </div>{" "}
      </div>
      <div class="x4">
        <div class="cloud"> </div>{" "}
      </div>
      <div class="x5">
        <div class="cloud"> </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Clouds;
