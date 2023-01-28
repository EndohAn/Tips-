
import './App.css';
import {useEffect,useState} from 'react';





function App() {

  const[advice,setAdvice] = useState('');
  const[newAdvice,setNewAdvice]=useState(advice);

  
  useEffect(()=>{
    const getApi =async()=>{
      const response =await fetch('http://www.boredapi.com/api/activity/');
      const data =await response.json();
      console.log(data.activity);
      setAdvice(data.activity)
    }
    getApi();
    
    
  },[newAdvice])

  const changeAdvice =()=>{
   setAdvice(setNewAdvice)
  }


 return(
  <div className='App'>
    <div className='container'>
      <h2>Tips for every day</h2>
    </div>
    <div className='container'>
      <p>{advice}</p>
    </div>
    <div className='container'>
      <button onClick ={changeAdvice}>Change your advace</button>
    </div>
  </div>
 )


}

export default App;
