import "./MainPage.css"

const MainPage = (props) => {
  return (
    <div className="home">
      <iframe
        style={{borderRadius: ".75em", boxShadow: "10px 5px 5px #764134"}}        
        id="ytplayer"
        type="text/html"
        width="1280"
        height="640"
        src={`https://www.youtube.com/embed/na_izM5zdY8?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default MainPage;
