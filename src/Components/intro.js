import React from 'react';
import { Link } from 'react-router-dom';

class Intro extends React.Component{
    render(){
        return(
            <div>
                <section id="hero" className="d-flex align-items-center">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Welcome to MyJobs Portal</h1>
                            <div className="d-flex">
                                <a href="/" className="btn btn-sm btn-get-started scrollto">Get Started</a>
                            </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="featured-services" className="featured-services">
                <div className="container">

                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="icon-box">
                        <div className="icon"><i className="bi bi-laptop"></i></div>
                        <h4 className="title"><Link className="scrollto" to="/">Get More Visibility</Link></h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                        <div className="icon-box">
                        <div className="icon"><i className="bi bi-card-checklist"></i></div>
                        <h4 className="title"><Link className="scrollto" to="/">Organize Your Candidate</Link></h4>
                        <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <div className="icon-box">
                        <div className="icon"><i className="bi bi-clipboard-data"></i></div>
                        <h4 className="title"><Link className="scrollto" to="/">Verify Their Abilities</Link></h4>
                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </div>
                    </div>

                </div>
                </section>

                <section id="comp" className="services section-bg">
                    <div className="container">

                        <div className="section-title">
                        <span>Companies Who Trust Us</span>
                        <h2>Companies Who Trust Us</h2>
                        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                        </div>

                        <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                            <div className="icon"><i className="bx bxl-dribbble"></i></div>
                            <h4><Link className="scrollto" to="/">Lorem Ipsum</Link></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                            <div className="icon"><i className="bx bx-file"></i></div>
                            <h4><Link className="scrollto" to="/">Sed ut perspiciatis</Link></h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="icon-box">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4><Link className="scrollto" to="/">Magni Dolores</Link></h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                            <div className="icon"><i className="bx bx-world"></i></div>
                            <h4><Link className="scrollto" to="/">Nemo Enim</Link></h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                            <div className="icon"><i className="bx bx-slideshow"></i></div>
                            <h4><Link className="scrollto" to="/">Dele cardo</Link></h4>
                            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                            <div className="icon"><i className="bx bx-arch"></i></div>
                            <h4><Link className="scrollto" to="/forgetPass">Divera don</Link></h4>
                            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                            </div>
                        </div>

                        </div>

                    </div>
                </section>

                
            </div>
        )
    }
}

export default Intro;