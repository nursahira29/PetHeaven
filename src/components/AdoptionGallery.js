import React from 'react';
import '../../src/App.css';
import PetList from './PetList';

class Product extends React.Component {
  render() {

    return (

      <div className="ProductItem">
          <img class="imgA"src={this.props.productImageUrl} />
        <div className='des'>
            <div>Pet Id: {this.props.id}</div>
            <p>Name: {this.props.name}</p>
            <p>Category: {this.props.category}</p>
            <p>Gender: {this.props.gender}</p>
            <p>Breed: {this.props.breed}</p>
            <p>Age: {this.props.age}</p>
      </div>      
      </div>


    );
  }
}

class ProductList extends React.Component {
  render() {
    const PetList = this.props.PetList;
    return PetList.map(product => (
      <Product
        id={product.id}
        name={product.name}
        category={product.category}
        gender={product.gender}
        breed={product.breed}
        age={product.age}
        url={product.url}
        votes={product.votes}
        productImageUrl={product.productImageUrl}
      />
    ));
    }
  }
  

export default function AdoptionGallery() {
        return (
          <div>
            <section class="sectionA">
                <h1> Adoption Gallery</h1> 
                <h4> Thank you for your interest in adopting an animal! </h4>
                <br></br>
            <ProductList PetList={PetList} />
            </section>

          </div>
  );
}
