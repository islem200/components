import React from 'react'
import Header  from './components/Header'
import Post from './components/Post'
import SideMenu from './components/SideMenu'

//const showCategories = true;
const App = () => {

  return (
    <div className='App'>
      <Header/>
      <div style={{display:"flex", justifyContent:"center"}}>

        {/* posts & side menu container  */}
      <div style={{display:"flex", width:"60%"}}>

{/* posts container */ }
<div style={{width:"50%"}}>

  <Post postName='Software developer' postBody="I'm student in gomycode"/>
  
  <Post postName='Hello' postBody="This is the second body"/>
  
  <Post postName='the third post' postBody="This is the third body"/>
  
</div>
{/*=== posts container ===*/ }

{/* side menu container */}
<div style={{width:"30%", marginTop:"25px"}}>
    <SideMenu/>

</div>
   {/* side menu container */}

{/* posts & side menu container  */}
</div>

      </div>
      


   



      
    </div>
  )
  
}

//conditional rendering in react

// const AppSideMenu = ()=>{
//   if (showCategories == true) {
//     return <SideMenu/>;

//   } else {
//     return null;
//   }


// }


export default App

