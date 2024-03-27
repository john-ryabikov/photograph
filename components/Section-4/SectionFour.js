import Wrapper from "@components/UI/Wrapper";
import Portfolio from "./Portfolio";

export default function SectionFour() {
  return (
    <section className="block-4" id="works">
        <Wrapper>
            <div className="block-4__cont">
                <h2 className="block-4__h">Портфолио</h2>
                <Portfolio/>
            </div>
        </Wrapper>
    </section>
  )
}
