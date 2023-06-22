import { Fragment, useEffect, useState } from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Logic from '../components/Logic';
function App() {
  const [teams, setTeams] = useState(['SRH','MI','CSK','RCB','kXIP','RR','GT','LSG'])

  const [InputValue, setInputValue]= useState("")
  const [errormsg, setErrorMsg]= useState("")
  const keyPressed=(event)=>{
    if(event.code=='Enter'){
      if(InputValue !==""){
        setTeams([...teams,InputValue])
        setInputValue("")
      }
    }
  }

  const removeteam=(team)=>{
    setTeams(teams.filter((nai) => {
      return nai!==team
    }))
  }
  const submit=()=>{
    if(InputValue !==""){
      setTeams([...teams,InputValue])
      setInputValue("")
    }
  }
  //useEffect function will be called always when teams arrays modidied....it is an inbuilt function
  useEffect(()=>(
    prepschedule()
  ),[teams])

  const prepschedule = ()=>{
    if(teams.length < 4){
      setErrorMsg("Teams must be grater than 4");
    } 
    else if(teams.length % 2 !== 0){
      setErrorMsg("Teams must be Even!...Add or Delete one");
    }
    else{
      setErrorMsg("");
    }
  }
  return (
    <>
    <div className='searchbar'>
      <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Team Name</InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm" placeholder='Enter team name and hit enter'
            value={InputValue}
            onChange={()=>setInputValue(event.target.value)}
            onKeyDown={()=>{keyPressed(event)}}
          />
          <Button variant="success" onClick={()=>{submit(); prepschedule()}}>Submit</Button>
        </InputGroup>
        {teams.map((team => <span className='capsule'>{team}  
        <CloseButton className='remove' onClick={()=>removeteam(team)}/>
        </span>))}
        <h2 className="error">{errormsg}</h2>

        {!errormsg && <Logic teams={teams}/>}
        {!errormsg &&  <Button variant="success" onClick={()=>window.print()}>Print pdf</Button>}
        
      </div>
    </>
  )
}

export default App
