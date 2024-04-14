import React from "react";

function Empty(){
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl font-bold ">No Tours Left</h1>
            <button className="bg-zinc-200 py-2 px-20 font-md rounded-md ">Refresh</button>
        </div>
    )
}

export default Empty;