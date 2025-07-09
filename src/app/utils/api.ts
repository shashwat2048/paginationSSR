import { notFound } from "next/navigation";

export async function getImages (pg:Number){
    try{
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(`https://picsum.photos/v2/list?page=${pg}&limit=15`);
    const data = await res.json();
    return data;
    }
    catch(err){
        notFound();
    }
}