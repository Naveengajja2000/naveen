import React from "react"
function Userform(){
      
      let [fn,setFn] =React.useState('');
      let [ln,setLn] =React.useState('');
      let [age,setAge] =React.useState('');
      let [city,setCity] =React.useState('');
      let [gender,setGender] =React.useState('');
      let [languages,setLanguages] = React.useState([]);
      let [users,setUsers] = React.useState([]);

      const handleCheckbox = (event)=>{
        if(event.target.checked){
            setLanguages([...languages,event.target.value])
        }
        else{
            let a1 = languages.filter((lang)=>{
                return lang!==event.target.value;
            })
            setLanguages(a1);
        }
      }


      const save = ()=>{
        let userObj = {
            firstname: fn,
            lastname:ln,
            age:age,
            city:city,
            gender:gender,
            languages:languages
        }
        setUsers([...users,userObj]);
      }
    return(
        <>
          <div>
            <label>Firstname:</label>
            <input type="text" onKeyUp={(e)=>{setFn(e.target.value)}}></input>
          </div>
          <div>
            <label>Lastname:</label>
            <input type="text"onKeyUp={(e)=>{setLn(e.target.value)}}></input>
          </div>
          <div>
            <label>Age:</label>
            <input type="text"onKeyUp={(e)=>{setAge(e.target.value)}}></input>
          </div>
          <div>
            <label>City:</label>
            <input type="text"onKeyUp={(e)=>{setCity(e.target.value)}}></input>
          </div>
          <div>
            <label>Gender:</label>
            <input type="radio" name='gender' value='Male' onChange={(e)=>{setGender(e.target.value)}}/><label>Male</label>
            <input type="radio" name='gender' value='Female' onChange={(e)=>{setGender(e.target.value)}}/><label>Female</label>
            <input type="radio" name='gender' value='Other' onChange={(e)=>{setGender(e.target.value)}}/><label>Other</label>
          </div>
          <div>
            <label>Languages:</label>
            <input type="checkbox" name="languages" value='Telue' onChange={(e)=>{handleCheckbox(e)}}/><label>Telugu</label>
            <input type="Checkbox" name="languages" value='English' onChange={(e)=>{handleCheckbox(e)}}/><label>English</label>
            <input type="Checkbox" name="languages" value='Hindi' onChange={(e)=>{handleCheckbox(e)}}/><label>Hindi</label>
          </div>
          <button onClick={save}>Save</button>
          <table border='1'>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>City</th>
                <th>Gender</th>
                <th>Languages</th>
            </tr>
            {
              users.map((user)=>{
                return(
                  <tr>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>{user.gender}</td>
                    <td>{user.languages.toString()}</td>
                  </tr>
                )
              })
            }
          </table>
          </>
    )
}

export default Userform;