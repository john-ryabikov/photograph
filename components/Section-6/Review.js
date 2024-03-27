import Image from "next/image"

export default function Review({review}) {
  return (
    <div className="block-6__review">
        <Image className="block-6__review-h" src="img/Section-6/h.svg" alt="" width={45} height={37}/>
        <p className="block-6__review-text">“Нашла Тимура случайно на сайте, понравились его работы и отзывы. Решили с ним работать. Он оправдал все ожидания. Профессиональный подход, качество, внимание к клиенту. И самое главное - отличный результат!”</p>
        <div className="block-6__review-men">
            <Image className="block-6__review-men-img" src={review.avatar} alt="" width={62} height={62}/>   
            <p className="block-6__review-men-name">
                <span>{review.name}</span>
                <a className="block-6__review-men-acc" href="/">
                  <Image className="block-6__acc-icon" src="img/Icons/vk_icon.svg" alt="" width={18} height={18}/>
                  <span>nick_name</span>
                </a>
            </p>
        </div>
    </div>
  )
}
