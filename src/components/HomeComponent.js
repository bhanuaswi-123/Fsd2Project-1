import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg width="100%" height="400px" src={baseUrl + item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    const newspapers = props.newspapers.map((newspaper) => {
        return(
            <div className="col-12 col-md-3" key={newspaper.id}>
                <RenderCard item={newspaper} />
            </div>
        );
    });

    if (props.newspapersLoading) {
        return(
            <div className="container">
                  <div className="row">            
                      <Loading />
                  </div>
            </div>
        );
    }
    else if (props.newspapersErrMess) {
        return(
            <div className="container">
                <div className="row">
                    <div className="center">
                        <h4>{props.newspapersErrMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="container">
                <div className="row row-content">
                    {newspapers}
                </div>
            </div>     
        );
    }
}

export default Home;