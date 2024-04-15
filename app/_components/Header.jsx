"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { LayoutGrid, ShoppingBag } from 'lucide-react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import GlobalApi from '../_utils/GlobalApi'
  

function Header() {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=>{
        getcategoryList();
    },[])

    const getcategoryList = () => {
        GlobalApi.getCategory().then(resp=>{
            console.log("Category List : ", resp.data.data);
            setCategoryList(resp.data.data);
        })
    }
  return (
    <div className='p-5 shadow-sm flex justify-between'>

        <div className='flex items-center gap-8'>

            <Image src='/logo.png'
                width={150}
                height={100}
                alt='Logo'
                priority={true}
            />
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <h2 className='
                hidden md:flex gap-2 items-center
                border rounded-full p-2 px-10 bg-slate-200 cursor-pointer
                '> 
                <LayoutGrid className='h-5 w-5'/>
                Category
                </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categoryList.map((category, index)=>(
                    <DropdownMenuItem key={index} className="flex gap-4 items-center cursor-pointer">
                        <Image src={
                            process.env.NEXT_PUBLIC_BACKEND_URL+category?.attributes?.icon?.data[0]?.attributes?.url}
                            unoptimized={true} // using unoptimized image beacuse of localhost
                            alt='Icon' width={30} height={30}/>
                        <h2 className='text-lg'>{category?.attributes?.Name}</h2>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
            </DropdownMenu>
        


            <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
                <Search />
                <input type="text" className='outline-none' name="" />
            </div>
        </div>

        <div className='flex gap-5 items-center'>
            <h2 className='flex gap-2 items-center text-lg'> <ShoppingBag /> 0</h2>
            <Button>Login</Button>
        </div>



    </div>
  )
}

export default Header