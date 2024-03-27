import Wrapper from "@components/UI/Wrapper";
import Form from "./Form";
import Contacts from "./Contacts";

export default function SectionSeven() {
  return (
    <section className="block-7" id="contacts">
        <Wrapper>
            <div className="block-7__cont">
              <h4 className="block-7__h">Контакты</h4>
              <div className="block-7__contacts">
                <Form/>
                <Contacts/>
              </div>
            </div>
        </Wrapper>
    </section>
  )
}
