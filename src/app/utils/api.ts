import { notFound } from "next/navigation";

export async function getImages (pg:number){
    try{
    const res = await fetch(`https://picsum.photos/v2/list?page=${pg}&limit=15`);
    const data = await res.json();
    return data;
    }
    catch(err){
        notFound();
    }
}