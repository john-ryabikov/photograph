import Image from "next/image"

export default function Contacts() {
  return (
    <div className="social-blog">
        <div className="social-blog__item">
            <p className="social-blog__title">Соц.сети</p>
            <div className="social-blog__buttons">
                <a className="social-blog__button" href="/">
                    <Image src="img/Icons/vk_icon.svg" width={22} height={22} alt=""/>
                </a>
                <a className="social-blog__button" href="/">
                    <Image src="img/Icons/mail_icon.svg" width={22} height={22} alt=""/>
                </a>
                <a className="social-blog__button" href="/">
                    <Image src="img/Icons/telegram_icon.svg" width={22} height={22} alt=""/>
                </a>
            </div>
        </div>
        <div className="social-blog__item">
            <p className="social-blog__title">Телефон</p>
            <div className="social-blog__inner">
                <div className="social-blog__icon">
                    <Image src="img/Icons/phone_icon.svg" width={22} height={22} alt=""/>
                </div>
                <p className="social-blog__text">+7 (123) 999-99-99</p>
            </div>
        </div>
        <div className="social-blog__item">
            <p className="social-blog__title">Адрес</p>
            <div className="social-blog__inner">
                <div className="social-blog__icon">
                    <Image src="img/Icons/geo_icon.svg" width={22} height={22} alt=""/>
                </div>
                <p className="social-blog__text">Россия, г. Москва, ул. Театральная, д. 38</p>
            </div>
        </div>
        <div className="social-blog__item">
            <p className="social-blog__title">Почта</p>
            <div className="social-blog__line"></div>
            <div className="social-blog__inner">
                <div className="social-blog__icon">
                    <Image src="img/Icons/convert_icon.svg" width={22} height={22} alt=""/>
                </div>
                <a className="social-blog__text social-blog__text_text-link" href="/">timur.fedorov@mail.ru</a>
            </div>
        </div>
    </div>
  )
}
