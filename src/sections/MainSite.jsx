import BtnBox from '../components/BtnBox'

const MainSites = ({sites}) => {
    return ( 
        <>
            {sites.map((site,index) => (
                <div key={index} className="card-xl">
                    <div className="border card-xl_img" >
                        <img src={site.img} alt={site.title}/>
                    </div>
                    <div className="border card-xl_box">
                        <h2>{site.title}</h2>
                        <p>{site.desc}</p>
                        <BtnBox site={site.site} repo={site.repo} title={site.title}/>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default MainSites;