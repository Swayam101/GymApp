import React from "react";
import SignIn from "../components/getMembershipForm";
import GetMembershipNav from "../components/getMembershipNav";
import MemOptions from "../components/memberShipOptions";

const GetMembership=()=>{
    return (
        <>
        <GetMembershipNav/>
        <SignIn/>
        <MemOptions/>
        </>
    )
}

export default GetMembership