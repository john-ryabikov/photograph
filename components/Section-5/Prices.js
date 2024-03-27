import Image from "next/image"
import { prices } from "@data/data"

export default function Prices() {
  return (
    <div className="block-5__prices">
        {prices.map((price, i) => (
            <div className="block-5__price" key={i}>
                <p className="block-5__type">{price.type}</p>
                <p className="block-5__cost">{price.cost}</p>
                <div className="block-5__list">
                    {price.lists.map((list, i) => (
                        <p className="block-5__circle" key={i}><Image src="img/Icons/circle.svg" alt="-" width={8} height={8}/>{list}</p>
                    ))}
                </div>
                <p className="block-5__text">{price.text}</p>
                <a className="block-5__button" href="#contacts">Заказать съемку</a>
            </div>
        ))}
    </div>
  )
}
