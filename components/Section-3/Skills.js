import Image from "next/image"
import { skills } from "@data/data"


export default function Skills() {
  return (
    <div className="block-3__skills">
      {skills.map((skill, i) => (
        <div key={i} className="skill">
            <div className="skill__space"></div>
            <Image className="skill__icon" src={skill.icon} alt="" width={80} height={80}/>
            <p className="skill__title">{skill.title}</p>
            <p className="skill__text">{skill.text}</p>
        </div>
      ))}
    </div>
  )
}
