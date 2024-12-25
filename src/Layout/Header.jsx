
import img from '../images/react.png';

const Header = ()=>{
    return (
      <div>
        <MainHeader/>
        <SubHeader/>
      </div>
    )
  }
  function MainHeader(){return(
    <div className='pt-3 pl-2 py-2' style={{backgroundColor:"black"}}>
      <img src={img} style={{height:"35px", verticalAlign:"top", marginRight:"5px"}}></img> 
      <span className='h2 pt-4 text-white-50'>REACT CODE TASKOPEDIA</span>
    </div>
   
  )}
  
  const subHeaderStyle ={
  color:"blueviolet",
  backgroundColor:"lightgray"
  }
   function SubHeader(){return(
   <p style={subHeaderStyle} className='text-center'> This will be exciting course.</p>
  )}
  export default Header;
