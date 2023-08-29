import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn, flipInX } from 'react-animations'
export default class Resume extends Component {
    render() {
        const ZoomIn = styled.div`animation:1s ${keyframes`${zoomIn}`} 1`;
        return (
            <ZoomIn>
                <div className="resume">
                    <div className="row" style={{ marginLeft: 10 }}>
                        <div className="col-12 col-sm-12">
                            <h1 className="resume-heading" style={{ textAlign: 'center', color: "white" }}>Erum Rehman
                    <h5 >MERN Stack Developer</h5>
                            </h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h4 className="resume-heading">Account Details</h4>
                            <div className="row resume-data">
                                <label className="resume-content">Github Account: </label>
                                <a href="https://github.com/Erum-Rehman" style={{ marginLeft: 10 }} className="resume-content"> https://github.com/Erum-Rehman</a>
                            </div>

                            <div className="row resume-data">
                                <label className="resume-content">LinkdIn Account: </label>
                                <a href="https://www.linkedin.com/in/erum-rehman-6632821a1/ " className="resume-content" style={{ marginLeft: 10 }}> https://www.linkedin.com/in/erum-rehman-6632821a1/ </a>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6">
                            <h4 className="resume-heading">Development Tools</h4>
                            <div className="row resume-data">
                                <label className="resume-content">Postman for API Testing</label>
                            </div>

                            <div className="row resume-data">
                                <label className="resume-content">Justinmind for Prototype Design</label>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                                <h4 className="resume-heading">Development Tools</h4>
                                <div className="row resume-data">
                                    <label className="resume-content">Postman for API Testing</label>
                                </div>

                                <div className="row resume-data">
                                    <label className="resume-content">Justinmind for Prototype Design</label>
                                </div>
                            </div> */}
                    {/* </div> */}
                    <div className="row">
                        {/* <div className="col-sm-1 col-1"></div> */}
                        <div className="col-sm-6 col-12">
                            {/* <div className="row"> */}

                            <h4 className="resume-heading">Education & Certification</h4>
                            <div className="row resume-data">
                                <ul>
                                    <li><h6><strong>University of Karachi</strong></h6>
                                        <p className="resume-content">BSCS (2020-2023)</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <h4 className="resume-heading">Achievement & Certifications</h4>
                            <div className="row resume-data">
                                <ul>
                                    <li><h6><strong>Coursera Certifications</strong></h6>
                                        <ul>
                                            <li className="resume-content">
                                            BASIC ENGLISH 2: PRE-INTERMEDIATE <strong>(Certified) </strong>
                                            </li>
                                            <li className="resume-content">
                                            Python Programming: A Concise Introduction<strong>(Certified) </strong>
                                            </li>
                                            <li className="resume-content">
                                            programming Fundamental <strong>(Certified) </strong>
                                            </li>
                                           
                                        </ul>
                                    </li>

                                    <li><h6><strong>Saylani Mass IT Training Program</strong></h6>
                                        <ul>
                                            <li className="resume-content">
                                            Full-Stack Web Development with React <strong>(Certified)  </strong>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <hr />
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h4 className="resume-heading">Project History</h4>
                            <div className="row resume-data">
                                <ul>
                                    <li><h6><strong>Grocery Store (React and Firebase Application) </strong></h6>
                                        <p className="resume-content">It’s an e-commerce website and I used Reactjs, Redux, Sass and Firebase Realtime database to build this website.</p> </li>

                                    <li><h6><strong>Game-fi (React Web Project)</strong></h6>
                                        <p className="resume-content">It’s a client project where I designed the website according to the client’s adobe Xd design and I used Reactjs and Sass to build this website. Responsive on all devices</p>
                                    </li>

                                    <li><h6><strong>Atalon (React Web Project) </strong></h6>
                                        <p className="resume-content">It’s a client project where I designed the website according to the client’s Figma design and I used Reactjs and Sass to build this website.</p></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6">
                            <h4 className="resume-heading">Work Experience</h4>
                            <div className="row resume-data">
                                <ul>
                                    <li><h6><strong>Finosys Pvt. Ltd</strong></h6>
                                        <p className="resume-content">MERN Stack Developer</p> (September 2022-Continue)</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </ZoomIn>
        )
    }
}