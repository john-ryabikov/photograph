import Wrapper from "@components/UI/Wrapper";
import Prices from "./Prices";

export default function SectionFive() {
  return (
    <section className="block-5" id="prices">
        <Wrapper>
            <div className="block-5__cont">
              <h3 className="block-5__h">Прайс-лист</h3>
              <Prices/>
            </div>
        </Wrapper>
    </section>
  )
}
