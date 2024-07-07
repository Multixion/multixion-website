import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from "react-fast-marquee"
export default function About() {

    return (
        <>

            <Layout breadcrumbTitle="ABOUT US">
                <section className="pb-120 pt-120 ">
                    <div className="overflow-hidden">
                        <div className="container">
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                        </div>
                                        <h3 className="counter-box_title">VISION</h3>
                                        <p className="counter-box_text">Our vision is
                                            clear: to lead with integrity, to innovate
                                            boldly, and to inspire positive change
                                            in the industries we serve. With every
                                            project and partnership, we aim not
                                            just to meet expectations but to
                                            redefine them, ensuring that Multixion
                                            remains synonymous with innovation,
                                            reliability, and unparalleled service
                                            excellence.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                        </div>
                                        <h3 className="counter-box_title">MISSION</h3>
                                        <p className="counter-box_text">Our mission is to lead by
                                            example, driving forward with
                                            integrity and dedication to surpass
                                            industry standards, forging enduring
                                            partnerships built on trust and mutual
                                            success. Through continuous innovation
                                            and personalized approaches, we aim
                                            to redefine possibilities and inspire
                                            positive change in every industry we
                                            serve.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                        </div>
                                        <h3 className="counter-box_title">MOTTO</h3>
                                        <p className="counter-box_text">
                                            <b>Innovate</b> - Pioneering cutting-edge
                                            solutions and technologies.
                                            <br /><br />
                                            <b>Integrate</b> - Seamlessly integrating
                                            advanced IT solutions into business
                                            operations.
                                            <br /><br />
                                            <b>Inspire</b> - Inspiring growth and success
                                            through strategic IT excellence
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-120">
                    <div className="overflow-hidden">
                        <div className="container">
                            <div className="row gy-40 justify-content-between">
                                <p>
                                    We live by the motto <b>‘Innovate, Integrate, Inspire.’</b>
                                    
                                    <br /><br />
                                    
                                    With a passion for technology and a commitment to excellence,
                                    we specialize in delivering a wide range of IT services tailored to
                                    empower businesses in the digital age. From foundational ser
                                    vices like basic hosting to intricate web development, mobile app
                                    creation, and custom cloud solutions, we offer comprehensive
                                    solutions that cater to the unique needs of our diverse clientele. <br /><br />

                                    Our approach is rooted in collaboration and understanding. We forge strong partnerships
                                    with our clients, taking the time to comprehend their goals and challenges. This allows
                                    us to create bespoke solutions that drive efficiency, productivity, and growth. Whether
                                    you’re a startup navigating the complexities of launching your digital presence or an
                                    established enterprise seeking to innovate and streamline operations, Multixion is here
                                    to support you every step of the way. <br /><br />

                                    At the heart of our operations lies a commitment to innovation. We stay at the forefront
                                    of technological advancements, constantly evolving to incorporate the latest tools and
                                    methodologies into our service offerings. This proactive approach ensures that our clients
                                    benefit from cutting-edge solutions that enhance their competitive edge in the market. <br /><br />

                                    In addition to our technical expertise, we are passionate about branding and graphic
                                    design. We understand the pivotal role visual identity plays in brand perception and
                                    customer engagement. Our talented team of designers crafts compelling visuals that
                                    resonate with your audience and elevate your brand presence across all platforms. <br /><br />

                                    At Multixion, we don’t just deliver projects; we cultivate relationships built on trust,
                                    integrity, and mutual success. Whether you’re looking to launch a new website,
                                    develop a sophisticated mobile app, enhance your cloud infrastructure, or redefine
                                    your brand identity, Multixion is your trusted partner for innovative IT solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*======== / Counter Section ========*/}

                {/*=========Skill Area 01==============*/}

                <section className="skill-area-1 pt-120 pb-120 black-bg position-relative">
                    <div className="skill-area-bg-shape1 square-shape-wrap">
                        <div className="square-shape1" />
                        <div className="square-shape3" />
                        <div className="square-shape4" />
                    </div>
                    <div className="container">
                        <div className="row gy-40 align-items-center">
                            <div className="col-xl-5">
                                <div className="skill-thumb-box1 wow img-custom-anim-left">
                                    <img src="/assets/img/others/skill1-1.jpg" alt="img" />
                                    <div className="square-shape-wrap">
                                        <div className="square-shape1" />
                                        <div className="square-shape2" />
                                        <div className="square-shape3" />
                                        <div className="square-shape4" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="skill-wrap1">
                                    <div className="section__title mb-50 wow img-custom-anim-left">
                                        <h2 className="title text-white">OUR CORE VALUES</h2>
                                        <p className="sec-text text-white">We aim to empower brands of all sizes and industries with data-driven strategies that yield tangible results. We believe in crafting campaigns that not only drive traffic but also foster engagement and conversions.</p>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">Innovation</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '100%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">Integrity</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '100%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">Teamwork</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '100%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">Excellence</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '100%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">Collaboration</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '100%' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*======== / Skill Section ========*/}

                {/*========Team Area==============*/}

                {/* <section className="pt-110 pb-120 position-relative">
                    <div className="contact-area-bg-shape1 square-shape-wrap d-lg-inline-flex d-none">
                        <div className="square-shape1" />
                        <div className="square-shape2" />
                        <div className="square-shape3" />
                        <div className="square-shape4" />
                    </div>
                    <div className="container">
                        <div className="section__title text-center mb-50">
                            <h2 className="title wow img-custom-anim-top">Meet The Makers</h2>
                        </div>
                        <div className="row gx-30 gy-30 justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                <div className="team-card">
                                    <div className="team-card-thumb">
                                        <img src="/assets/img/team/team-1-2.jpg" alt="img" />
                                    </div>
                                    <div className="team-card-details">
                                        <div className="media-left">
                                            <h4 className="team-card-title"><Link href="/team-details">Aadhib Nasser</Link></h4>
                                            <p className="team-card-text">Creative Director</p>
                                        </div>
                                        <div className="team-social">
                                            <button className="icon-btn"><i className="fas fa-plus" /></button>
                                            <div className="social-icon-wrap">
                                                <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                <div className="team-card">
                                    <div className="team-card-thumb">
                                        <img src="/assets/img/team/team-1-4.jpg" alt="img" />
                                    </div>
                                    <div className="team-card-details">
                                        <div className="media-left">
                                            <h4 className="team-card-title"><Link href="/team-details">Zedan Saheer</Link></h4>
                                            <p className="team-card-text">Technical Lead</p>
                                        </div>
                                        <div className="team-social">
                                            <button className="icon-btn"><i className="fas fa-plus" /></button>
                                            <div className="social-icon-wrap">
                                                <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*======== / Team Section ========*/}

                {/*==============================Award Area==============================*/}

                <section className="award-area-1 pt-110 pb-120 theme-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section__title mb-50 wow img-custom-anim-left">
                                    <h2 className="title vision-title">VISION 2030 - Timeline</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <ul className="award-wrap-area">
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Market Expansion</Link></h4>
                                            <p> Expand market presence in Saudi Arabia, supporting local busi
                                                nesses and aligning with Vision 2030’s economic goals by fostering
                                                innovation and enhancing service delivery across diverse sectors</p>
                                        </div>
                                        <span className="award-year">2024</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Tech Advancements</Link></h4>
                                            <p> Introduce advanced technology solutions to drive digital trans
                                                formation across Saudi industries, enhancing efficiency and
                                                competitiveness in preparation for Vision 2030.</p>
                                        </div>
                                        <span className="award-year">2025</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Digital Resilience</Link></h4>
                                            <p> Strengthen digital infrastructure to ensure resilience against
                                                cyber threats, safeguarding national assets and supporting Vision
                                                2030’s goals for a secure digital environment</p>
                                        </div>
                                        <span className="award-year">2026</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Strategic Partnerships</Link></h4>
                                            <p> Form strategic alliances with Saudi entities to accelerate economic
                                                growth and sustainable development, promoting collaborative initiatives
                                                aligned with Vision 2030</p>
                                        </div>
                                        <span className="award-year">2027</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Sustainable Growth</Link></h4>
                                            <p> Achieve sustainable economic growth by integrating innovative technologies, nurturing local
                                                talent, and supporting economic diversification efforts, contributing to Saudi Vision 2030’s long
                                                term prosperity and global competitiveness.
                                            </p>
                                        </div>
                                        <span className="award-year">2030</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*======== / Award Section ========*/}

                {/*=================Marquee Area====================*/}

                <div className="container-fluid px-0 overflow-hidden pb-30 pt-30 theme-bg">
                    <div className="slider__marquee clearfix marquee-wrap style3">
                        <Marquee className="marquee_mode marquee__group">
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-1.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-2.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-3.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-4.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-5.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-6.svg" alt="img" /></Link></div>
                        </Marquee>
                    </div>
                </div>
                {/*======== / Marquee Section ========*/}



            </Layout>
        </>
    )
}