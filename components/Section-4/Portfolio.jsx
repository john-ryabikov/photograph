'use client'

import Image from "next/image"
import { photos } from "@data/data"

import { useState } from "react"

const categoryes = [
    { cat: "all", name: "Все" },
    { cat: "cat1", name: "Категория №1" },
    { cat: "cat2", name: "Категория №2" },
    { cat: "cat3", name: "Категория №3" }
];

export default function Portfolio() {

  const [activeIndex, setActiveIndex] = useState(0)
  const [filterPhotos, setFilterPhotos] = useState([...photos]);

  const chooseCat = (category) => {
    if (category === "all") {
      setFilterPhotos([...photos]);
      return;
    } else {
      setFilterPhotos(photos.filter((photo) => photo.category === category));
    }
  }

  const categoryClick = (i_cat, category) => {
    setActiveIndex(i_cat)
    chooseCat(category)
  }

  return (
    <div className="portfolio">
        <nav className="portfolio__categoryes">
            {categoryes.map((category, i) => (
                <p 
                  className={activeIndex === i ? "portfolio__category_active" : "portfolio__category"} 
                  key={i}
                  onClick={() => {categoryClick(i, category.cat)}}
                >{category.name}</p>
            ))}
        </nav>
        <div className="portfolio__photos">
            {filterPhotos.map((photo) => (
                <Image key={photo.id} className="portfolio__photo" src={photo.img} alt="" width={354} height={354}/>
            ))}
        </div>
    </div>
  )
}
