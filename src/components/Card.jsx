import { MdOutlineExpandLess } from "react-icons/md";
import TechBox from '../components/TechBox'
import BtnBox from '../components/BtnBox'
import { useState } from 'react'

const Card = ({site, tech}) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className='border'>
            <div className='card-lg'>
                <img src={site.img} alt={`${site.title} image`} className='card-lg__img'/>
                <div className={`${isVisible ? 'display-slide' : ''} card-lg__slide`}>
                    <h3>
                        {site.title}
                        <button onClick={() => setIsVisible(prev => !prev)}>
                            <MdOutlineExpandLess alt='arrow up'/>
                        </button>
                    </h3>
                    <TechBox currentTech={site.tech} tech={tech}/>
                    <BtnBox site={site.site} repo={site.repo} title={site.title}/>
                </div>
            </div>
        </div>
    )
}

export default Card