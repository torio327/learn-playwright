'use client'

import {useCallback, useRef, useState} from "react";

export default function ShuffleMemberForm(){
    const [result, setResult] = useState([] as string[])
    const firstRef=useRef<HTMLInputElement>(null)
    const secondRef=useRef<HTMLInputElement>(null)
    const thirdRef=useRef<HTMLInputElement>(null)

    const callApi=useCallback(async ()=>{
        const members=[] as string[]
        const refs=[firstRef,firstRef,firstRef]
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

        </>
    )
}