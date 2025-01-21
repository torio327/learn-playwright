import {Metadata} from "next";
import ShuffleMemberForm from "@/app/form/form";

export const metadata:Metadata={
    title:"form",
    description:"Playwright step two"
}

export default function Form(){

    return(
        <main>
            <h1>入力フォーム</h1>
            <ShuffleMemberForm/>
        </main>
    )
}