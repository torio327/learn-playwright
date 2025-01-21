'use client'

import {useCallback, useRef, useState} from "react";

export default function ShuffleMemberForm(){
    const [result, setResult] = useState([] as string[])
    const firstRef=useRef<HTMLInputElement>(null)
    const secondRef=useRef<HTMLInputElement>(null)
    const thirdRef=useRef<HTMLInputElement>(null)

    const callApi=useCallback(async ()=>{
        const members=[] as string[]
        const refs=[firstRef,secondRef,thirdRef]
        for(const ref of refs){
            if(ref.current?.value){
                members.push(ref.current?.value)
            }
        }
        const res=await fetch('/api/shuffle',{
            method:'post',
            body:JSON.stringify({members})
        })
        if(res.ok){
            const result=await res.json() as {members:string[]}
            setResult(result.members)
        }
    },[])
    return(
        <>
            <label htmlFor={"first"}>first person:</label>
            <input type={"text"} ref={firstRef} id={"first"} name={"first"} placeholder={"write name"}/><br/>
            <label htmlFor={"second"}>second person:</label>
            <input type={"text"} ref={secondRef} id={"second"} name={"second"} placeholder={"write name"}/><br/>
            <label htmlFor={"third"}>third person:</label>
            <input type={"text"} ref={thirdRef} id={"third"} name={"third"} placeholder={"write name"}/><br/>
            <button onClick={callApi}>Shuffle</button>
            <label htmlFor={"result"}>Result</label><br/>
            <output id={"result"} htmlFor={"first second third fourth"}>{result.join("->")}</output>
        </>
    )
}