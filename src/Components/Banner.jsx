
const Banner = () => {
    return (
        <div className="carousel md:h-[80vh] h-56 w-full">
        <div id="slide1" className="carousel-item relative w-full">
        

         <div className="hero h-full" style={{backgroundImage: 'url(https://i.ibb.co/FYxSFsk/colorful-cat-white-background-dripping-art-free-photo.jpg)'}}>
  <div className="hero-overlay "></div>
  <div className=" text-center text-neutral-content">
    <div className=" h-full w-full">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

        
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        


        <div className="hero h-full" style={{backgroundImage: 'url(https://i.ibb.co/jLPBJPQ/Easy-Craft-ideas-for-kids-d6c8148.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" text-center text-neutral-content">
    <div className=" h-full w-full">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>



          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          


        <div className="hero h-full" style={{backgroundImage: 'url(https://i.ibb.co/cv4rmHJ/beautiful-art-pictures-1912-x-1132-kue5prwhuvquv659.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" text-center text-neutral-content">
    <div className=" h-full w-full">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>





          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
         

        <div className="hero h-full" style={{backgroundImage: 'url(https://i.ibb.co/6HfQxsg/360-F-290768326-SN1izi-M2epj-Ej-SGLDu-KHAe7k5-Mb37r-WP.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" text-center text-neutral-content">
    <div className=" h-full w-full">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>






          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;