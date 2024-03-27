import Wrapper from "@components/UI/Wrapper";

export default function Footer() {
  return (
    <footer className="footer">
        <Wrapper>
          <div className="footer__cont">
            <div className="footer__rules">
                  <p className="footer__copyright">
                      © 2024 Все права защищены. Тимур Федоров<br/><a className="footer__copyright-link" href="/">Политика конфедициальности</a>
                  </p>
                  <p className="footer__author">Разработка:
                      <a className="footer__author-link" href="https://just-site.ru" rel="nofollow" target="_blank">Just-site.ru</a>
                  </p>
              </div>
          </div>
        </Wrapper>
    </footer>
  )
}
