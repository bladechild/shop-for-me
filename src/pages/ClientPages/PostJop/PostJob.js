import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostJobAside from '../../../Components/ClientComponents/PostJobAside/PostJobAside';
import PostJobTitle from './../../../Components/ClientComponents/PostJobTitle/PostJobTitle';
import PostJobDescription from './../../../Components/ClientComponents/PostJobDescription/PostJobDescription';
import PostJobDetails from './../../../Components/ClientComponents/PostJobDetails/PostJobDetails';
import PostJobExpertise from './../../../Components/ClientComponents/PostJobExpertise/PostJobExpertise';
import PostJobVisibility from '../../../Components/ClientComponents/PostJobVisibility/PostJobVisibility';
import PostJobBudget from './../../../Components/ClientComponents/PostJobBudget/PostJobBudget';
import PostJobReview from './../../../Components/ClientComponents/PostJobReview/PostJobReview';
import PostJobGetStarted from './../../../Components/ClientComponents/PostJobGetStarted/PostJobGetStarted';

export default function PostJob() {
    let [start, setStart] = useState(false);

    const isStart = () => {
        setStart(true);
    };

    const [btns, setBtns] = useState({
        title: true,
        description: true,
        details: true,
        expertise: true,
        visibility: true,
        budget: true,
        review: true,
    });

    return (
        <section className='sec-bg-cn p-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <PostJobAside btns={btns} />
                    </div>
                    <div className='col-lg-9'>
                        {/* <Routes>
                            <Route path="/" exact element={ */}
                        {btns.title ? (
                            <PostJobGetStarted
                                start={start}
                                isStart={isStart}
                                setBtns={setBtns}
                                btns={btns}
                            />
                        ) : null}
                        {/* } /> */}
                        {/* <Route path="/title" exact element={ */}
                        {!btns.title && btns.description ? (
                            <PostJobTitle setBtns={setBtns} btns={btns} />
                        ) : null}
                        {!btns.title && !btns.description && btns.details ? (
                            <PostJobDescription setBtns={setBtns} btns={btns} />
                        ) : null}
                        {/* } /> */}
                        {/* <Route path="/post-job/description" exact element={ */}

                        {/* } /> */}
                        {/* <Route path="/post-job/details" exact element={ */}
                        {!btns.title &&
                        !btns.description &&
                        !btns.details &&
                        btns.expertise ? (
                            <PostJobDetails setBtns={setBtns} btns={btns} />
                        ) : null}
                        {/* } /> */}
                        {/* <Route path="/post-job/expertise" exact element={ */}
                        {!btns.title &&
                        !btns.description &&
                        !btns.details &&
                        !btns.expertise &&
                        btns.visibility ? (
                            <PostJobExpertise setBtns={setBtns} btns={btns} />
                        ) : null}
                        {/* } /> */}
                        {/* <Route path="/post-job/visibility" exact element={ */}
                        {!btns.title &&
                        !btns.description &&
                        !btns.details &&
                        !btns.expertise &&
                        !btns.visibility &&
                        btns.budget ? (
                            <PostJobVisibility setBtns={setBtns} btns={btns} />
                        ) : null}
                        {/* } /> */}
                        {/* <Route path="/post-job/budget" exact element={ */}
                        {!btns.title &&
                        !btns.description &&
                        !btns.details &&
                        !btns.expertise &&
                        !btns.visibility &&
                        !btns.budget &&
                        btns.review ? (
                            <PostJobBudget setBtns={setBtns} btns={btns} />
                        ) : null}
                        {/* } /> */}
                        {/* <Route path="/post-job/review" exact element={ */}
                        {!btns.title &&
                        !btns.description &&
                        !btns.details &&
                        !btns.expertise &&
                        !btns.visibility &&
                        !btns.budget &&
                        !btns.review ? (
                            <PostJobReview />
                        ) : null}
                        {/* } /> */}
                        {/* </Routes> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

