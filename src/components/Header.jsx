import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-cart'>
            <h1><div  onClick={()=> props.handleShow(false)} >Shopping Cart</div></h1>
           <h2> <div onClick={()=> props.handleShow(true)} > Cart
                <sup> {props.count} </sup>
            </div></h2>
        </div>
    );
}

export default Header;
