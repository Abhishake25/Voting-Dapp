import { useEffect, useState } from "react";
function Winner({state,contract}) {
const [winner, setWinner] = useState("Not Declared");
  useEffect(()=>{
    const {contract} = state;
    async function Winner(){
      const winner = await contract.methods.winner().call();
      if(winner!=="0x0000000000000000000000000000000000000000"){
        setWinner(winner);
      }
    
     // console.log(winner);
    }
    contract && Winner();
  },[state])
  return <div className="win">Winner is : {winner} </div>;
}
export default Winner;
