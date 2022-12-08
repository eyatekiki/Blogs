import React from 'react'

const Menu = () => {

    const posts = [
        {
          id: 1,
          title: "Cluster Feeding and Fussy Evenings",
          desc: "My daughter had a fussy time every evening for a couple of months (yes, it does go away!). I spent weeks camped out on the end of the sofa with a constantly nursing and/or fussy baby every evening from about 6 to 10 PM.",
          img: "https://tse4.mm.bing.net/th?id=OIP.zn_lV1MhrlEQLJxZrzRY9gHaE5&pid=Api&P=0"
        },
        {
          id: 2,
          title: "Cluster Feeding and Fussy Evenings",
          desc: "My daughter had a fussy time every evening for a couple of months (yes, it does go away!). I spent weeks camped out on the end of the sofa with a constantly nursing and/or fussy baby every evening from about 6 to 10 PM.",
          img: "https://penfieldbuildingblocks.org/wp-content/uploads/2018/08/the-mother-child-relationship.jpg"
        },
        {
          id: 3,
          title: "Cluster Feeding and Fussy Evenings",
          desc: "My daughter had a fussy time every evening for a couple of months (yes, it does go away!). I spent weeks camped out on the end of the sofa with a constantly nursing and/or fussy baby every evening from about 6 to 10 PM.",
          img: "https://wallpapercave.com/wp/wp3179979.jpg"
        },
    
      ];
  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
               <img src={post.img} alt="" /> 
               <h2>{post.title}</h2>
               <button>Read More</button>
            </div>
        ))}
    </div>
  )
}
export default Menu
