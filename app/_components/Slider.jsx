import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'

export const Slider = (sliderList) => {
    const slider = sliderList.sliderList.map((slider, key)=> {
        console.log(key, slider.attributes.image.data)
    });
    // console.log("slider List", sliderList.sliderList[0].attributes.image.data[0].attributes.url);
  return (
    <div>
        {/* <Carousel>
        <CarouselContent>
            {sliderList.sliderList.map((slider, index)=>(
                <CarouselItem key={index}>
                    <Image src={process.env.NEXT_PUBLIC_BACKEND_URL+slider?.attributes?.image?.data?.attributes?.url} 
                    width={1000}
                    height={400}
                    alt='Slider'
                    className='w-full'
                    />
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel> */}

    </div>
  )
}
