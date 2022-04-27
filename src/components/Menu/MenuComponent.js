import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    
        
    renderDish(dish) {

        if (dish != null)
            return(
                <div  className="row">
                    <Card className="col-12 col-md-5 m-1">
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        <CardText>{dish.price}</CardText>
                        <CardText>{dish.comment}</CardText>
                        </CardBody>
                    </Card>
                    <div className="col-12 col-md-5 m-1">
                     <h1>Comments</h1>
                     {
                         dish.comments.map((comment,i)=>{
                             console.log("this is the comment", comment)
                             return <h4 key={comment.id}>{comment.comment}</h4>
                         })
                     }
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish,i) => {
            return (
              <div key={i} className="col-12 col-md-5 m-1">
                <a href='#sDish'>
                    <Card key={dish.id}
                        onClick={() => {this.onDishSelect(dish); this.myScroll()}}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        <CardTitle   style={{backgroundColor : "blue",color : "white"}}>{dish.price}</CardTitle>
                        
                    </Card>
                </a>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="container"   id="sDish">
                  {/*<div  className="col-12 col-md-5 m-1">*/}
                    {this.renderDish(this.state.selectedDish)}

                  {/*</div>*/}
                </div>
            </div>
        );
    }
}
export default Menu;