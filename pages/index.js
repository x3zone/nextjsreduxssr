import React from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../store'
import Link from 'next/link';

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
    const currentStore = reduxStore.getState();
    const action = fetchItems();
    if(!currentStore.swapi){
      await reduxStore.dispatch(action);
      return {action}
    }
    else{
      return {}
    }
  }

  render () {
    return (
      <div>
        <h1>Home</h1>
        <Link href="/about"><a>about</a></Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { swapi } = state
  return { swapi }
}

export default connect(mapStateToProps)(Index)
