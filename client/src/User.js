import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Table } from 'react-bootstrap';
import { useLazyQuery } from '@apollo/client';
// grapghql Query throgh gql to fetch Users Detail
const USER = gql`
query GetUsers {
    getUsersDetail {
      id
      firstName
      lastName
      email
    }
  }
`;

const User = (props) => {
    const [ userData, setUserData ] = useState();
    const [ skip, setSkip ] = useState(false);
    const { loading, error, data } = useQuery(USER);
    
    // /Fetches the data from the graphQL API
    useEffect(() => {
        if(!loading && !error && !!data ) {
            setSkip(true);
            setUserData(data);
        }
    }, [data, loading]);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return(
         <div className='country'>
           <h1>List of Products Against User 1</h1>
           <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th> First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>

                </tr>
              </thead>
              <tbody>
              {userData && userData.getUsersDetail && userData.getUsersDetail.map((item, i) => {
                return [
                    <tr key={i}>
                      <td className="toggler">
                      {item && item.id }
                      </td>
                      <td>{item && item.firstName}</td>
                      <td>{item && item.lastName}</td>
                      <td>{item && item.email}</td>
                    </tr>,

                ];
              })}

              </tbody>
            </Table>
        </div>
    )
}

export { User };