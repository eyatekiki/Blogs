import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
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
    <div className='home'>
      <div className="posts">
        {posts.map((post)=>(
        <div className="post" key={post.id}>
          <div className="img">
            <img src={post.img} alt="" />
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.desc}</p>
            <button>Read More</button>

          </div>

        </div>
        ))}
      </div>

    </div>
  );
};

export default Home