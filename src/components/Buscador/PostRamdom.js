
import React from "react";
import "./poster.css"

const poster=[
  "https://i.redd.it/nj038jytnl741.png",
   "https://noescinetodoloquereluce.com/wp-content/uploads/2022/06/9FHEtQPiWw979Vws99OKDUKzS30.jpg",
    "https://www.dvdsreleasedates.com/posters/800/M/Marmaduke-movie-poster.jpg",
    "https://sm.ign.com/ign_latam/screenshot/default/mkposter1_11zt.jpg"
]
let i=0


function PostRamdom(props){

  let [cont,setcont]=React.useState(0)
  let [post,setpost]=React.useState({
    postconstener:"postconstener",
    circulo:"circulo",
    circulo2:"circulo2",
    imgen:"imgen"
  })
  //   function* infinitePost(){
  //     while (true) {
  //       i++
  //       if (i==4) {
  //         i=0
  //       }
  //       yield 
  //     }
  //   }
    
      
  //  React.useEffect(()=>{
  // let a=infinitePost()
  // a.next()

  //   setTimeout(() => {
  //     setcont(cont+1)
  //   },1000);
  //   if (cont==4) {
  //     setcont(cont=0)
  //   }

  // },[cont])
  // console.log(i)

 

  React.useEffect(()=>{
  
    if (props.value) {
      setpost({
        postconstener:"postconstener-true",
        circulo:"circulo-true",
        circulo2:"circulo2-true",
        imgen:"imgen-true"
      })
    }
  },[props.value])

  return(
    <div className={post.postconstener}> 
    <div className={post.circulo}></div>       
    <div className={post.circulo2}></div>       
      <div className={post.imgen}>
        <img src={poster[2]} alt="poster"/>
      </div>
    </div>
  )
}

export default PostRamdom

  