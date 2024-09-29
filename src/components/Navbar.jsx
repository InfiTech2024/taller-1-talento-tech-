/* eslint-disable react/prop-types */

import { useState } from "react"
import { FormItem } from "./Form";



export const Navbar = ({items, addItem}) => {

    
    const [newMenuItem, setNewMenuItem] = useState("");

    const [isloading, setIsLoading] = useState(false);


    const handleItems = () => {
        if (newMenuItem.trim() !== "") {
            setIsLoading(true)
            addItem({name: newMenuItem, status: 'agregando'})
            setNewMenuItem("")
        }

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    return(
        <div className="font-poppins">
                <nav className="py-4 px-2 border-2 border-b-slate-900 mb-6">
                    <ul className="flex items-center justify-around  cursor-pointer space-x-8">
                        {items.map((item, idx) => (
                            <li key={idx} className="relative group py-2 ">
                                {item}
                                <span className="absolute left-0 bottom-0 h-[2px] bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* separador */}
                <hr className="my-4 border-t border-slate-400 m-4" />
                {/* formulario de item */}
                <FormItem 
                    newItem={newMenuItem}
                    setNewItem={setNewMenuItem}
                    isloading={isloading}
                    setIsLoading={setIsLoading}
                    handleClick={handleItems}
                />
        </div>
    )
}