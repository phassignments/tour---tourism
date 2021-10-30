import React from 'react';
import { Row } from 'react-bootstrap';

import usePlans from '../../hooks/usePlans';
import Plans from '../Plans/Plans';
import Banner from '../Banner/Banner';

const Home = () => {
    const [plans] = usePlans();
    return (
        <div>
            <Banner></Banner>
            <div className="container my-5">

                <Row xs={1} md={2} className="g-4 ">
                    {
                        plans.map(plan => <Plans
                            key={plan._id}
                            plan={plan}
                        ></Plans>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Home;