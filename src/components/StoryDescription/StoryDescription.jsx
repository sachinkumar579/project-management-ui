const StoryDescription =(props)=>{

    return <div className="story-description">
           <div className="story-description-items-name">
           <input value={props.story.name}></input>
           </div>
           <div>
           <textarea className="textarea" type="text" value={props.story.description}></textarea>
           </div>
           <div className="story-description-items">
           <label>Number</label> <a>{props.story.number}</a>
           </div>
           <div className="story-description-items">
           <label>State</label> <label><select value={props.story.state}><option value="To-do">To-do</option><option value="In-progress">In-progress</option><option value="Done">Done</option></select></label>
           </div>
           <div className="story-description-items">
           <label>Sprint</label> <input value={props.story.sprint}></input>
           </div>
           <div className="story-description-items">
           <label>EPIC</label> <input value={props.story.epic}></input>
           </div>
           <div className="story-description-items">
           <label>Story Points</label> <input value={props.story.storyPoints}></input>
           </div>
           <div className="story-description-items">
           <label>Assignee</label> <input value={props.story.assignee}></input>
           </div>
           <div className="story-description-items">
           <label>Created at</label> <label>{props.story.createdAt}</label>
           </div>
    </div>
}

export default StoryDescription