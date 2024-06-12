import React from 'react';
import './assets.css';
import { Form, FormGroup } from "reactstrap";
import { Col, Container } from 'react-bootstrap';

function About() {
    return (
        <div className='bg-gray-200 py-12'>
            {/* about */}
            <div className="p-8">
                <div className="flex flex-col w-full text-center px-12 lg:px-28">
                    <h4 className="text-3xl lg:text-5xl font-bold py-8">About Uwezo Coast Shuttle</h4>
                    <p className="leading-7 py-2">
                        At Uwezo Shuttle, we offer unparalleled travel experiences marked by reliability, comfort, affordability, and trustworthiness. Our well-maintained, modern vans ensure punctuality, getting you to your destination on time. Comfort is prioritized with plush seating, ample legroom, and climate control for a smooth ride. We believe premium travel should be affordable, offering competitive rates without compromising quality. Trustworthy service is our foundation, with experienced, courteous drivers prioritizing your safety and satisfaction. With Uwezo Shuttle, you are guaranteed <strong>punctuality,</strong> <strong>punctuality,</strong> <strong>cost-effectiveness,</strong> and a  <strong>trusted service</strong>, making us your dependable long-distance travel partner. Experience the best with Uwezo Shuttle.
                    </p>
                </div>
            </div>

            <div className='flex justify-center items-center py-36' id='contactForm'>
                {/* booking form */}
                <Container className='px-8 mb-4'>
                    <div className="form__row flex flex-col">
                        <Col lg="4" md="4">
                            <div className="find__cars-left">
                                <h2 className=''>Book your Ticket</h2>
                            </div>
                        </Col>

                        <Col lg="8" md="8" sm="12">
                            <Form className="form">
                                <div className="flex items-center justify-between flex-wrap">
                                    <FormGroup className="form__group">
                                        <input type="text" placeholder="From address" required />
                                    </FormGroup>

                                    <FormGroup className="form__group">
                                        <input type="text" placeholder="To address" required />
                                    </FormGroup>

                                    <FormGroup className="form__group">
                                        <input type="date" placeholder="Journey date" required />
                                    </FormGroup>

                                    <FormGroup className="form__group">
                                        <input
                                            className="journey__time"
                                            type="time"
                                            placeholder="Journey time"
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup className="select__group">
                                        <select>
                                            <option value="time">Time</option>
                                            <option value="day">Day</option>
                                            <option value="night">Night</option>
                                        </select>
                                    </FormGroup>

                                    <FormGroup className="form__group">
                                        <button className="btn find__car-btn">Book Ticket</button>
                                    </FormGroup>
                                </div>
                            </Form>
                        </Col>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default About;