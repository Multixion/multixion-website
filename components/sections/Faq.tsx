import Accordion from '../elements/Accordion'

export default function Faq1() {
    return (
        <>
            <section className="faq-area-1 pt-110">
                <div className="container">
                    <div className="section__title mb-20 wow img-custom-anim-left">
                        <h2 className="title">FAQs</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Accordion/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
