import { LoaderPinwheel } from 'lucide-react';

export default function Loading(){
    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <LoaderPinwheel className='animate-spin size-10'/>
        </div>
    );
}