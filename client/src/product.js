import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Table } from 'react-bootstrap';

const PRODUCT = gql`
query {
  products(id:1)
   {
       id
       name
       description
       price
       image
   }
 }
`;
const Product = (props) => {
    const [ userData, setUserData ] = useState();
    const [ skip, setSkip ] = useState(false);
    const { loading, error, data } = useQuery(PRODUCT, {
        variables : {
            id: "1"
        }, 
        skip
    });
    
    // /Fetches the data from the graphQL API
    useEffect(() => {
        if(!loading && !error && !!data ) {
            setSkip(true);
            setUserData(data);
        }
    }, [data, loading]);
    console.log("userData",userData && userData.products)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return(
         <div className='country'>
           <h1>List of Products Against User 1</h1>
           <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th> Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
              {userData && userData.products && userData.products.map((item, i) => {
                return [
                    <tr key={i}>
                      <td className="toggler">
                      {item && item.id }
                      </td>
                      <td>{item && item.name}</td>
                      <td>{item && item.description}</td>
                      <td>{item && item.price}</td>
                      <td>{item && item.image}</td>
                    </tr>,

                ];
              })}

              </tbody>
            </Table>
        </div>
    )
}

export { Product };