import { FaGithub } from 'react-icons/fa'

const BtnBox = ({repo, site, title}) => {
    return (
        <div className='btn-box'>
            <a target='_blank' className='btn border' href={repo}>
                <FaGithub alt={`${title} github`}/>
                Github
            </a>
            <a target='_blank' className='btn border' style={site === '-' ? {pointerEvents: 'none'} : {}} href={site}>
                Podgląd
            </a>
        </div>
    )
}

export default BtnBox