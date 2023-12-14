import BtnBox from "../components/BtnBox";
import Card from "../components/Card";
import TechBox from "../components/TechBox";

const SubSites = ({sitesMain, sites, tech}) => {
    return (
        <> 
            <div className="section-sites">
                {sitesMain.map((site,index) => (
                    <Card site={site} tech={tech} key={index}/>
                ))}
            </div>
            <div className="section-sub-sites">
                {sites.map((site,index) => (
                    <div className="card border" key={index}>
                        <h3>{site.title}</h3>
                        <TechBox tech={tech} currentTech={site.tech}/>
                        <BtnBox site={site.site} repo={site.repo} title={site.title}/>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default SubSites;