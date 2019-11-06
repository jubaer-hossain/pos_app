import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';
import logodark from '../../../images/logo-dark.png';

class Pagesinvoice extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {

        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Invoice </h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                                        <li className="breadcrumb-item active">Invoice</li>
                                    </ol>
                                </Col>
                                <Col sm="6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col>
                                                <div className="invoice-title">
                                                    <h4 className="mt-0 float-right font-16"><strong>Order # 12345</strong></h4>
                                                    <div className="mb-4">
                                                        <img src={logodark} alt="logo" height="16" />
                                                    </div>
                                                </div>
                                                <hr />
                                                <Row>
                                                    <div className="col-6">
                                                        <address>
                                                            <strong>Billed To:</strong><br />
                                                            John Smith<br />
                                                            1234 Main<br />
                                                            Apt. 4B<br />
                                                            Springfield, ST 54321
                                                        </address>
                                                    </div>
                                                    <div className="col-6 text-right">
                                                        <address>
                                                            <strong>Shipped To:</strong><br />
                                                            Kenny Rigdon<br />
                                                            1234 Main<br />
                                                            Apt. 4B<br />
                                                            Springfield, ST 54321
                                                        </address>
                                                    </div>
                                                </Row>
                                                <Row>
                                                    <div className="col-6 m-t-30">
                                                        <address>
                                                            <strong>Payment Method:</strong><br />
                                                            Visa ending **** 4242<br />
                                                            jsmith@email.com
                                                        </address>
                                                    </div>
                                                    <div className="col-6 m-t-30 text-right">
                                                        <address>
                                                            <strong>Order Date:</strong><br />
                                                            January 16, 2019<br /><br />
                                                        </address>
                                                    </div>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <div>
                                                    <div className="p-2">
                                                        <h3 className="font-16"><strong>Order summary</strong></h3>
                                                    </div>
                                                    <div className="">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <td><strong>Item</strong></td>
                                                                        <td className="text-center"><strong>Price</strong></td>
                                                                        <td className="text-center"><strong>Quantity</strong>
                                                                        </td>
                                                                        <td className="text-right"><strong>Totals</strong></td>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr>
                                                                        <td>BS-200</td>
                                                                        <td className="text-center">$10.99</td>
                                                                        <td className="text-center">1</td>
                                                                        <td className="text-right">$10.99</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BS-400</td>
                                                                        <td className="text-center">$20.00</td>
                                                                        <td className="text-center">3</td>
                                                                        <td className="text-right">$60.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BS-1000</td>
                                                                        <td className="text-center">$600.00</td>
                                                                        <td className="text-center">1</td>
                                                                        <td className="text-right">$600.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="thick-line"></td>
                                                                        <td className="thick-line"></td>
                                                                        <td className="thick-line text-center">
                                                                            <strong>Subtotal</strong></td>
                                                                        <td className="thick-line text-right">$670.99</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="no-line"></td>
                                                                        <td className="no-line"></td>
                                                                        <td className="no-line text-center">
                                                                            <strong>Shipping</strong></td>
                                                                        <td className="no-line text-right">$15</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="no-line"></td>
                                                                        <td className="no-line"></td>
                                                                        <td className="no-line text-center">
                                                                            <strong>Total</strong></td>
                                                                        <td className="no-line text-right"><h4 className="m-0">$685.99</h4></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <div className="d-print-none">
                                                            <div className="float-right">
                                                                <Link  onClick={() => window.print()} to="#" className="btn btn-success waves-effect waves-light"><i className="fa fa-print"></i></Link>
                                                                {' '}<Link to="#" className="btn btn-primary waves-effect waves-light">Send</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(Pagesinvoice);

