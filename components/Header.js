import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";

function Header({ searchvalue, onChangeMethod }) {

    return (
        <header className="sticky top-0 z-50 flex items-center px-1 py-2 shadow-md bg-[#ffffff]">
            {true? <h1 className=" ml-2 text-gray-700 text-2xl">Game Engine Explorer</h1> : <Image src="/assets/html_img.png" alt="me" width="50" height="50" className="mr-10"/>}
            
            <div className="focus-within:text-gray-600 focus-within:shadow-md mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-500 rounded-lg">
                <Icon name="search" size="3xl" color="gray" />
                <input type="text" value={searchvalue} onChange={e => onChangeMethod(e.target.value)} placeholder="Search engine or game" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>
        </header>
    )
}

export default Header
