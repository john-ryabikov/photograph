'use client'

import Image from "next/image"
import Review from "./Review"
import { reviews } from "@data/data"

import { useRef, useState, useEffect } from 'react'
import { useMediaQuery } from "@hooks/useMediaQuery"

export default function Reviews() {

    const isMobile = useMediaQuery("(max-width: 767px)");

    const sliderReviews = useRef(null)
    const [slidePos, setSlidePos] = useState(0)
    const [slideStand, setSlideStand] = useState(1)

    const nextSlide = () => {
        isMobile ? setSlidePos((prev) => prev - 275) : setSlidePos((prev) => prev - 900);
        setSlideStand((prev) => prev + 1) 
    }
    const prevSlide = () => {
        isMobile ? setSlidePos((prev) => prev + 275) : setSlidePos((prev) => prev + 900);
        setSlideStand((prev) => prev - 1)
    }

    useEffect(() => {
        sliderReviews.current.style = `left: ${slidePos}px`
    }, [slidePos])



    return (
        <>
            <button className={slideStand === 1 ? "block-6__arrow-prev block-6__arrow-prev_disabled" : "block-6__arrow-prev"} onClick={prevSlide}>
                <Image className="block-6__arrow-prev-icon" src="img/Section-6/arrow_l.svg" alt="" width={12} height={35}/>
            </button>
            <div className="block-6__reviews">
                <div className="block-6__reviews-wrapper" ref={sliderReviews}>
                    {reviews.map((review, i) => (<Review key={i} review={review}/>))}
                </div>
            </div>
            <button className={slideStand === 3 ? "block-6__arrow-next block-6__arrow-next_disabled" : "block-6__arrow-next"} onClick={nextSlide}>
                <Image className="block-6__arrow-next-icon" src="img/Section-6/arrow_r.svg" alt="" width={12} height={35}/>
            </button>
        </>
    )
}
