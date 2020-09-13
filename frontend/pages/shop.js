import Link from 'next/link';
import Header from './../components/header';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import ShopItems from './../components/shopitems';

const axios = require('axios');
const showProducts = (selling, items) => {
  return {
    type: "newItem",
    selling,
    items
  }
}
function Shop({selling, dispatch}) {
  useEffect(() => {
    const items = axios.get('/_api/getFoods').then(res => res.data);
    dispatch(showProducts(selling, items));
  }, [])
  return (
    <React.Fragment>
      <Header/>
      <h2 className="text-center my-2">Products</h2>
      <ShopItems />
    </React.Fragment>
  )
}

export default connect()(Shop);