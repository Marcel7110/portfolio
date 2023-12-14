const TechBox = ({currentTech, tech}) => {
    const searchIcon = (name) => {
        const icon = tech.find(i => i.name === name)
        return icon?.svg
    }

    return ( 
        <div className="tech-box">
            {currentTech.map((item,index) => (
                <img key={index} src={searchIcon(item)} alt={`${item} icon`}/>
            ))}
        </div>
     );
}
 
export default TechBox;