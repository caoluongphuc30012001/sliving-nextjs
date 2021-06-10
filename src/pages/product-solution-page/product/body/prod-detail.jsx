import React from 'react';
import CardSection from '@components/card/card-content/card-section';
import { Table } from "react-bootstrap";
const ProdDetail = () => {
    return (
        <div className="prod-details">
            <div className="prod-detail">
                <div className="prod-detail-header container">
                    <CardSection title={"Sliving Thermostat has recevied the following certifications"} />
                </div>
                <div className="prod-detail-body">
                    <Table bordered hover size="sm-3" className="prod-detail-table">
                        <thead>
                            <tr>
                                <th className="certification-name titl-table">Certification Name</th>
                                <th className="name-detail">Name Details</th>
                                <th className="remark">Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="certification-name">SRRC</td>
                                <td className="name-detail">It is a long established fact that a reader will be distracted by the readable content </td>
                                <td className="remark">It is a long established fact that a reader will be distracted by the readable content </td>
                            </tr>
                            <tr>
                                <td className="certification-name">2</td>
                                <td className="name-detail">It is a long established fact that a reader will be distracted by the readable content </td>
                                <td className="remark">It is a long established fact that a reader will be distracted by the readable content </td>
                            </tr>
                            <tr>
                                <td className="certification-name">Wifi</td>
                                <td className="name-detail">It is a long established fact that a reader will be distracted by the readable content </td>
                                <td className="remark">It is a long established fact that a reader will be distracted by the readable content </td>
                            </tr>
                            <tr>
                                <td className="certification-name">RoHs</td>
                                <td className="name-detail">It is a long established fact that a reader will be distracted by the readable content </td>
                                <td className="remark">It is a long established fact that a reader will be distracted by the readable content </td>
                            </tr>
                            <tr>
                                <td className="certification-name">InterTek</td>
                                <td className="name-detail">It is a long established fact that a reader will be distracted by the readable content </td>
                                <td className="remark">It is a long established fact that a reader will be distracted by the readable content </td>
                            </tr>
                            <tr>
                                <td className="certification-name">FCC ID</td>
                                <td className="name-detail">It is a long established fact that a reader will be distracted by the readable content </td>
                                <td className="remark">It is a long established fact that a reader will be distracted by the readable content </td>
                            </tr>
                            <tr>
                                <td className="certification-name">IC</td>
                                <td className="name-detail">It is a long established fact that a reader will be distracted by the readable content </td>
                                <td className="remark">It is a long established fact that a reader will be distracted by the readable content </td>
                            </tr>
                            <tr>
                                <td className="certification-name">CE</td>
                                <td className="name-detail">It is a long established fact that a reader will be distracted by the readable content </td>
                                <td className="remark">It is a long established fact that a reader will be distracted by the readable content </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
export default ProdDetail;
