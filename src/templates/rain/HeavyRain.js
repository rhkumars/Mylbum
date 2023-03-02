import './HeavyRain.css';

function HeavyRain(props) {

    let background = props.url;
    

  return (
    <section style={{ backgroundImage: `url(${background})` }}></section>
  );
}

export default HeavyRain;

