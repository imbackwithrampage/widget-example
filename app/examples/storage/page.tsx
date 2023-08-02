"use client"

import {useWidgetApi} from "@beeper/matrix-widget-toolkit-react";
import {useState} from "react";
import Back from "@/app/components/back";

export default function Storage() {

    const [text, setText] = useState("")
    const [storedText, setStoredText] = useState(localStorage.getItem('widget_example_text') || "")

    function setLocalStorage(event: any) {
        event.preventDefault();
        localStorage.setItem('widget_example_text', text);

        // To automatically update the text displayed when "Set localStorage" is pressed
        setStoredText(localStorage.getItem('widget_example_text') || "");
    }

    return (
        <>
            <Back />
            <p className="mt-4">Using localStorage, a widget can access data across any of the user&apos;s chats.</p>
            <p className="mt-4">This is useful if you want the user to add their own information, such as preferences and API keys.</p>

            { storedText &&
                <p className="mt-4">Current value: { storedText }</p>
            }

            <form onSubmit={setLocalStorage}>
                <input className="block border border-black p-2 w-3/4" value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text" />
                <button className="mt-2 bg-black text-white p-2 border border-black hover:bg-white hover:text-black">Set localStorage</button>
            </form>
        </>
    )
}