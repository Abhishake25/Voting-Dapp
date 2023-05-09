import VoterList from "./VoterList";
import VoterRegister from "./VoterRegister";

function Candidate({state,account}) {
    return <>
    <VoterRegister state={state} account={account}></VoterRegister>
    <VoterList state={state}></VoterList>
    </>;
}
export default Candidate;