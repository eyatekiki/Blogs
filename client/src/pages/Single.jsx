import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://wallpapercave.com/wp/wp3179979.jpg" alt="" />
        <div className="user">
          <img src="https://wallpapercave.com/wp/wp3179979.jpg" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Cluster Feeding and Fussy Evenings</h1>
        <p>A new individual is created when the elements of a potent sperm merge with those of a fertile ovum, or egg. Before this union both the spermatozoon (sperm) and the ovum have migrated for considerable distances in order to achieve their union. A number of actively motile spermatozoa are deposited in the vagina, pass through the uterus, and invade the uterine (fallopian) tube, where they surround the ovum. The ovum has arrived there after extrusion from its follicle, or capsule, in the ovary. After it enters the tube, the ovum loses its outer layer of cells as a result of action by substances in the spermatozoa and from the lining of the tubal wall. Loss of the outer layer of the ovum allows a number of spermatozoa to penetrate the egg’s surface. Only one spermatozoon, however, normally becomes the fertilizing organism. Once it has entered the substance of the ovum, the nuclear head of this spermatozoon separates from its tail. The tail gradually disappears, but the head with its nucleus survives. As it travels toward the nucleus of the ovum (at this stage called the female pronucleus), the head enlarges and becomes the male pronucleus. The two pronuclei meet in the centre of the ovum, where their threadlike chromatin material organizes into chromosomes.</p>
      </div>
      
    </div>
  )
}

export default Single