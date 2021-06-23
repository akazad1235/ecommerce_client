import React from 'react';

const sidebar = () => {
    return (
        <div>
            <div>
                <h4 className="border-bottom border-secondary pb-3">Brand</h4>
                <div>
                    <ul>
                        <li>HP</li>
                        <li>Dell</li>
                        <li>Asuss</li>
                        <li>LG</li>
                        <li>Walton</li>
                        <li>Samsung</li>
                    </ul>
                </div>
                
            </div>
            <div>
                <h4 className="border-bottom border-secondary pb-3">Categories</h4>
                <div>
                    <ul>
                        <li>Electronics Devices</li>
                        <li>Dell</li>
                        <li>Asuss</li>
                        <li>LG</li>
                        <li>Walton</li>
                        <li>Samsung</li>
                    </ul>
                </div>
                
            </div>
            <div>
                <h4 className="border-bottom border-secondary pb-3">Price</h4>
                <div className="d-flex">
                  <input className="price-input"  type="number" name="" id="" placeholder="min" />
                  <input className="price-input"     type="number" name="" id="" placeholder="max"/>
                  <input className="price-btn btn btn-danger btn-sm"  type="button" name="" id="" value="GO" />
                </div>
            </div>
        </div>
    );
};



export default sidebar;