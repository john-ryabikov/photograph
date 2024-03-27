import Wrapper from "@components/UI/Wrapper";
import Image from "next/image"

export default function SectionOne() {
  return (
    <section className="block-1">
        <Wrapper>
            <div className="block-1__cont">
              <div className="block-1__infoblock">
                      <div className="block-1__infoblock-space"></div>
                      <div className="block-1__infoblock-text">
                          <h1 className="block-1__h">Профессиональный фотограф</h1>
                          <div className="block-1__author">
                              <p className="block-1__author-name">Тимур</p>
                              <p className="block-1__author-secondname">Федоров</p>
                          </div>
                          <div className="block-1__buttons">
                              <a href="#contacts" className="block-1__btn">Запись на съемки</a>
                              <a href="#prices" className="block-1__btn">Прайс-лист</a>
                          </div>
                      </div>
                      <Image 
                        priority
                        className="block-1__author-img" 
                        src="/img/Section-1/avatar.jpg" 
                        alt="Тимур Федоров"
                        width={370}
                        height={540}
                      />
                      <div className="block-1__social">
                          <a href="/" className="block-1__social-link">
                            <Image priority src="img/Icons/vk_icon.svg" width={24} height={24} alt=""/>
                          </a>
                          <a href="/" className="block-1__social-link">
                            <Image priority src="img/Icons/mail_icon.svg" width={24} height={24} alt=""/>
                          </a>
                          <a href="/" className="block-1__social-link">
                            <Image priority src="img/Icons/telegram_icon.svg" width={24} height={24} alt=""/>
                          </a>
                      </div>
                  </div>
            </div>
            <Image 
              priority 
              className="arrow-down" 
              src="img/Icons/arrow_icon.svg" 
              alt="Листать вниз" 
              width={40} 
              height={10}
            />
        </Wrapper>
    </section>
  )
}
