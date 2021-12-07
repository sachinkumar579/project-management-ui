import './DisplayItems.css'
import StoryDescription from '../StoryDescription/StoryDescription'
import stories from './Stories.json'
import { useState } from 'react'
import DevelopersSection from '../DevelopersSection/DevelopersSection'

const DisplayItems=()=>{
      
      const [storyDescriptionState,setStoryDescriptionState] = useState('')
      const [activeDev,setActiveDev] = useState('')
      const [sprintStoriesState,setSprintStoriesState] = useState(stories.data)

      const onSelectDevHandler=(index,devs)=>{
         let updateStories = stories.data.filter(data=>data.assignee===devs[index])
         setActiveDev(index)
         setSprintStoriesState(updateStories)
      }
   
      return <div className="container"> 
      <div>
      <DevelopersSection onSelectDevHandler={onSelectDevHandler} activeDev={activeDev}></DevelopersSection>
      {sprintStoriesState.map((data,index)=>
       <div className={data.number===storyDescriptionState.number ? "story-click":"story"} key={index} onClick ={()=>{setStoryDescriptionState(data)}} >
              <div className="story-details">  
              <div className="story-name">{data.name}</div> 
              <div>{data.number}</div> 
              <div>{data.assignee}</div> 
              <div>{data.storyPoints}</div>
              </div>
              </div>)
      }
      </div>
      {storyDescriptionState && <StoryDescription story={storyDescriptionState}></StoryDescription>}
      </div>
}
export default DisplayItems