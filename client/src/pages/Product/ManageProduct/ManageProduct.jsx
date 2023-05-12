import PropTypes from 'prop-types'

const ManageProduct = () => {
  return (
    <div>
        <div className="container">
<div className="col-xs-12 col-md-6 bootstrap snippets bootdeys">
	<div className="product-content product-wrap clearfix">
		<div className="row">
				<div className="col-md-5 col-sm-12 col-xs-12">
					<div className="product-image"> 
						<img src="https://www.bootdey.com/image/194x228/87CEFA" alt="194x228" className="img-responsive" /> 
						<span className="tag2 hot">
							HOT
						</span> 
					</div>
				</div>
				<div className="col-md-7 col-sm-12 col-xs-12">
				<div className="product-deatil">
						<h5 className="name">
							<a href="#">
								Product Name Title Here <span>Category</span>
							</a>
						</h5>
						<p className="price-container">
							<span>$99</span>
						</p>
						<span className="tag1"></span> 
				</div>
				<div className="description">
					<p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
				</div>
				<div className="product-info smart-form">
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-6"> 
							<button  className="btn btn-success mx-2">Edit</button>
                            <button  className="btn btn-danger mx-2">Delete</button>
						</div>
					
					</div>
				</div>
			</div>
		</div>
	</div> 
    </div>
    </div>
    </div>

  )
}

ManageProduct.propTypes = {}

export default ManageProduct