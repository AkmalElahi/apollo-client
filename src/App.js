import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo'

const query = gql`
    {
      getAllUsers{
        username
        _id
        email
      }
    }
`
class App extends React.Component {
  render() {
    return (
      <Query query={query}>
        {
          ({ loading, data, error }) => {
            if (loading) {
              return "loading...."
            }
            if (error) {
              return `Error ${error.message}`
            }
            return (
              <div>
                {
                  data.getAllUsers.map(item => (
                    <div>
                      <p>{item._id}</p>
                      <p>{item.email}</p>
                      <p>{item.username}</p>
                    </div>
                  ))
                }
              </div>
            )
          }
        }
      </Query>
    )
  }
}

export default App;
