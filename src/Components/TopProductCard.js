

const TopProductCard = (props) =>{

    return (
        <div className="card bg-dark text-white shadow m-1" style={{width: '15rem'}}>
           <div className="d-flex mt-4">
                <img src={props.image} 
                    className="card-img-top" alt="..." style={{width: '8rem', height: '8.5rem'}} />
                    <span className="display-1 ms-auto text-danger" style={{fontFamily: 'Lobster'}}><strong>{props.rank}</strong></span>
           </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Total Sold: {props.unitSold} Units</p>
                
            </div>
        </div>
    );

}


export default TopProductCard;