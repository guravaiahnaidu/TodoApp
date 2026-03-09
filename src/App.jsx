


import { useState } from "react"

// let App=()=>{
//   let[h,setH]=useState("")
//   let[w,setW]=useState("")
//   let[r,setR]=useState("")

//   let updwgt=(e)=>{
//     setW(e.target.value)
//   }
//   let updhgt=(e)=>{
//     setH(e.target.value)
//   }
//   let cal=()=>{
//     setR(w/h**2*10000)
//     setW("")
//     setH("")
//   }
//   return(<div>
//     <input type="text" placeholder="Enter height in cm" onChange={updhgt} value={h}/>
//     <input type="text" placeholder="Enter weight in kg" onChange={updwgt} value={w}/>
//     <button onClick={cal}>Calculate</button>
//     <div>{r}</div>
//   </div>)
// }
// export default App




let App=()=>{
  let[data,setData]=useState({"eid":"","title":"","desc":"","dl":"","status":"pending"})
  let[arr,setArr]=useState([])
  let[ind,setInd]=useState(-1)

  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    setArr([...arr,data])
    setData({"eid":"","title":"","desc":"","dl":"","status":"pending"})
  }
  let mc=(ind)=>{
    arr[ind].status="completed"
    setArr([...arr])
  }
  let edit=(obj,i)=>{
    setData(obj)
    setInd(i)
  }
  let upd=()=>{
    arr[ind]=data
    setArr([...arr])
    setData({"eid":"","title":"","desc":"","dl":"","status":"pending"})
    setInd(-1)
  }
  let del=(i)=>{
    arr.splice(i,1)
    setArr([...arr])
  }
  return(<div>
    <div className="form">
      <select name="eid" value={data.eid} onChange={fun}>
        <option value="" disabled>--select eid--</option>
        <option value="e101">e101-Naveen</option>
        <option value="e102">e102-Guru</option>
        <option value="e103">e103-Charan</option>
        <option value="e104">e104-Sai</option>
      </select>

      <input type="text" name="title" placeholder="Enter title" onChange={fun} value={data.title}/>
      <textarea name="desc" onChange={fun} value={data.desc} placeholder="Enter desc"></textarea>
      <input type="date" name="dl" onChange={fun} value={data.dl}/>
      {ind==-1?<button onClick={add}>Add Task</button>:<button onClick={upd}>Update</button>}
    </div>
    {
      arr.length>0&&<table border={1}>
        <tr><th>SNO</th><th>Eid</th><th>Title</th><th>Desc</th><th>Deadline</th><th>Status</th></tr>
        {
          arr.map((obj,ind)=>{
            return(<tr>
              <td>{ind+1}</td>
              <td>{obj.eid}</td>
              <td>{obj.title}</td>
              <td>{obj.desc}</td>
              <td>{obj.dl}</td>
              <td>{obj.status}</td>
              {
                obj.status=="pending"&&<>
                <td><button onClick={()=>edit(obj,ind)}>Edit</button></td>
                <td><button onClick={()=>del(ind)}>Delete</button></td>
                <td><button onClick={()=>mc(ind)}>Completed</button></td>
                </>
              }
            </tr>)
          })
        }
      </table>
    }
  </div>)
}
export default App
