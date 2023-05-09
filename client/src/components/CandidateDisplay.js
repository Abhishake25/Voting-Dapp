import { useEffect, useState } from "react";

function CandidateDisplay({state}) {
  const [list,setList] = useState([ ]);
  useEffect(()=>{
  
    const {contract} = state;
    async function List(){
      const list = await contract.methods.candidateList().call();
     setList(list);
      //console.log(list);
    }
      contract && List();
  },[state])

  return (

<>
    
    {list.map((candidate) => {

    return(
   <table>
   <tbody>
      <tr>
        <td>{candidate.candidateId}</td>
        <td>{candidate.name}</td>
        <td>{candidate.party}</td>
       
      </tr>
      </tbody>
      </table>
    )
  })}
 </>

  );
}
export default CandidateDisplay;
