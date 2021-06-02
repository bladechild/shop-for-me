/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import ContractEarnings from '../../../Components/TalentComponents/ContractEarnings/ContractEarnings';
import ContractFeedback from '../../../Components/TalentComponents/ContractFeedback/ContractFeedback';
import img from "../../../assets/img/icon-user.svg";
import "../../ClientPages/Talent/Talent.css";
import { auth, db } from "../../../firebase";
import { useSelector } from "react-redux";

export default function Contract({ location }) {

    const user = useSelector(state => state.talentData);
    const [data, setData] = useState({ job: {}, client: {}, clientContract: {} })

    useEffect(() => {
        const { job, client, clientContract } = location?.state;
        setData({ job, client, clientContract });
    }, [])

    const { job, client, clientContract } = data;

    const askPayment = () => {
        db.collection("client")
            .doc(client.authID)
            .collection("notification").add({
                message: `${user.firstName} ${user.lastName} finished the job and asked for payment.`,
                type: "offer",
                talentID: auth.currentUser.uid,
                isShow: false
            })
    }

    const endContract = () => {

    }

    return (
        <div className="container my-5 px-5">
            <div className="row bg-white border border-rounded border-1 bg-gray mx-3">
                <div className="row p-5">
                    <div className="col-9">
                        <h3 className="">{job?.jobTitle}</h3>
                        {
                            job?.clientJobReview?.review &&
                            <div>
                                <small>
                                    <i className="fas fa-check-circle text-success"> </i>
                                    {"  "}Completed Feb 21{"  "}
                                    <i className="fas fa-star text-bgUpwork"></i>
                                    <i className="fas fa-star text-bgUpwork"></i>
                                    <i className="fas fa-star text-bgUpwork"></i>
                                    <i className="fas fa-star text-bgUpwork"></i>
                                    <i className="fas fa-star text-bgUpwork"></i>
                                </small>
                            </div>
                        }
                    </div>
                    <div className="col-3">
                        <img style={{ height: "40px", width: "40px" }} className="circle bg-white" src={img} alt="" />
                        <span className="h4 ms-3">
                            {client?.firstName + " " + client?.lastName}
                        </span>
                        <p className="text-muted text-center">{client?.location}</p>
                    </div>
                </div>

                <div className="row px-5">
                    <ul className="nav nav-tabs ">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                exact
                                to="/contract"
                            >
                                Earnings
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                exact
                                to="/contract/feedback"
                            >
                                Feedback
                            </NavLink>
                        </li>
                        {
                            job?.status !== "closed" &&
                            <li className="nav-item ms-3">
                                <button
                                    type="button"
                                    className="btn btn-light dropdown-toggle border border-1 rounded-circle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-ellipsis-h " />
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item" onClick={askPayment}>
                                            Ask for pyament
                                        </button>
                                        <button className="dropdown-item" onClick={endContract}>
                                            End contract
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        }
                    </ul>
                    <Switch>
                        <Route path="/contract" exact>
                            <ContractEarnings job={job} client={client} clientContract={clientContract} />
                        </Route>
                        <Route path="/contract/feedback" exact>
                            <ContractFeedback job={job} />
                        </Route>
                    </Switch>
                </div>

            </div>

        </div>

    )
}
