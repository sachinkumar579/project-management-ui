# project-management-ui

### Project setup steps:
- clone project 
- Navigate to project directory 
- Run npm install
- Run npm run dev
- It will launch a UI running in dev server at http://localhost:3000/

### Project details
- This is a Project Management UI for displaying work assigned to a team . There is a filter option to check work assigned to each member and also a section
  that expands as we select the particular item and shows all details
- UI is developed using React library and vite build tool is used for packaging of project  
- There are 5 components 
  - DevelopersSection - Showing team member names and an option to select each member   
  - DisplayItems - Contains the UI and logic to show all work assigned to a team. On selecting the items it displays another section with all details . 
  - StoryDescription - A separate section in the page for displaying details about the assigned work   
  - Stories.json - Contains stories with their details for display. This must be replaced with suitable REST APIs to get the data in real time  
- The UI is published using Github Actions - https://sachinkumar579.github.io/project-management-ui/dist/ 
