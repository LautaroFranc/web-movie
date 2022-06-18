
import React from "react";
import "./poster.css"
function PostRamdom(){
    const poster=[
        "https://i.redd.it/nj038jytnl741.png",
        "https://noescinetodoloquereluce.com/wp-content/uploads/2022/06/9FHEtQPiWw979Vws99OKDUKzS30.jpg",
        "https://www.dvdsreleasedates.com/posters/800/M/Marmaduke-movie-poster.jpg",
        "https://sm.ign.com/ign_latam/screenshot/default/mkposter1_11zt.jpg"
    ]
  let [cont,setcont]=React.useState(0)
  setTimeout(() => {
    setcont(cont+1)
  },8000);
  if (cont==4) {
    setcont(cont=0)
  }

    return(
        <div className="postconstener"> 
        <div className="circulo"></div>       
        <div className="circulo2"></div>       
          <div className="imgen">
            <img src={poster[cont]} alt="poster"/>
          </div>
        </div>
    )
}

export default PostRamdom
  