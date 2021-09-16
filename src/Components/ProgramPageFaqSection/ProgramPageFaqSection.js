import './ProgramPageFaqSection.css'
import Accordian from '../Accordian/Accordian'

const ProgramPageFaqSection = () => {
    let title = 'Lorem ipsum dolor sit';
    let content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque vitae expedita ab, sit rerum, eligendi praesentium consequatur ipsa non, distinctio rem repudiandae eveniet ea sequi ratione temporibus nihil placeat eius explicabo perspiciatis voluptas. Perferendis provident voluptate vel dolores facilis';  
    return (
        <section className='faq-section'>
            <div className="faq-section-header">
                FAQs
            </div>
            <Accordian heading={
                <>
                {title}
                <span className="material-icons down-arrow">
                    keyboard_arrow_down
                </span>
                </>
            } text={content}/>
            <Accordian heading={
                <>
                {title}
                <span className="material-icons down-arrow">
                    keyboard_arrow_down
                </span>
                </>
            } text={content}/>
            <Accordian heading={
                <>
                {title}
                <span className="material-icons down-arrow">
                    keyboard_arrow_down
                </span>
                </>
            } text={content}/>
        </section>

    )
}

export default ProgramPageFaqSection
