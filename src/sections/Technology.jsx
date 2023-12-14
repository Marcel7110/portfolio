const Technology = ({tech}) => {
    return ( 
        <div className="section-technology border">
            <h1>Technologia</h1>
            <div>
                {tech.map((item,index) => (
                    <a href={item.link} key={index} target="_blanc" className="technology_item">
                        <img src={item.svg} alt={`${item.name} icon`}/>
                        <p>{item.name}</p>
                    </a>
                ))}
            </div>
        </div>
     );
}
 
export default Technology;