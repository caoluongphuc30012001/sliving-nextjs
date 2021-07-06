import React from 'react';
import CardSection from '@components/card/card-content/card-section';
import { Table } from "react-bootstrap";
const Specitification = () => {
    return (
        <div className="spectifi">
            <div className="spectifi-wrap">
                <CardSection title={"Spectifications"} />
                <div className="spectifi-wrap-body container-wrap">
                    <Table bordered={false} hover size="sm" className="spec-table">
                        <thead>
                            <tr>
                                <th>Model:</th>
                                <th>Color:</th>
                                <th>Main Metarial:</th>
                                <th>Weight:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ZHVG11LM</td>
                                <td>White</td>
                                <td>ABS+PC</td>
                                <td>186.5g</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Dimensions:</th>
                                <th>Operating Temperature:</th>
                                <th>Operating Humidity:</th>
                                <th>Input:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>80 x 80 41.5mm</td>
                                <td>White</td>
                                <td>ABS+PC</td>
                                <td>186.5g</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Wrieless Protocol:</th>
                                <th>What's in the box:</th>
                                <th>CMIIT ID:</th>
                                <th>FCC ID:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ZHVG11LM</td>
                                <td>White</td>
                                <td>ABS+PC</td>
                                <td>186.5g</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>IC:</th>
                                <th colSpan="2">App Support</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ZHVG11LM</td>
                                <td colSpan="2">It is a long established fact that a reader will be distracted by the readable content</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colSpan="3">HomeKit compatible accessories:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colSpan="3">The hub can support  the following sub-devices:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Specitification;
