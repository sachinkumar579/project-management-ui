import './DevelopersSection.css'

const DevelopersSection=(props)=>{
    const devs = ['Dev 1','Dev 2','Dev 3','Dev 4','Dev 5']
     
    return <div className="developers">
      {
            devs.map((data,index)=> <div className="developer-names" key={index}>
                  <button onClick={()=>props.onSelectDevHandler(index,devs)} className={props.activeDev===index ? 'developer-active' : undefined}>
                        {data}
                  </button>
            </div>)
      } 
      </div>
}

export default DevelopersSection