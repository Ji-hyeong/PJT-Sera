import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Product.module.css';
import {connect} from 'react-redux';
import { useHistory } from 'react-router';
const Product = ({user,product}) => {
  const history = useHistory();
  const onClickHeart = () => {
    
  };
  const onClickProduct = () => {
    history.push(`/detail/${product.item_id}`);
  };
  return (
    <div className={styles.box}>
      <div className={styles.icon}>
        <button style={{border:'none', background:'transparent'}} onClick={onClickHeart}>
          {
            product.dibs ?
            <FontAwesomeIcon icon={['fas', 'heart']} size="sm" color="#EB0000"/> :
            <FontAwesomeIcon icon={['far', 'heart']} size="sm" color="#EB0000"/>
          }
        </button>
      </div>
      <div style={{cursor:'pointer'}} onClick={onClickProduct}>
        <div className={styles.image_box}>
          <img className={styles.image} src={product.item_img} alt="Product Image"/>
        </div>
        <div className={styles.brand}>{product.item_brand}</div>
        <div className={styles.name}>{product.item_name}</div>
        <div className={styles.volume_price}>{product.item_volume} / {product.item_price}</div>
      </div>

    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object
}
const mapStateToProps = (state) => ({
  user: state.user.user,
})

export default connect(
  mapStateToProps,
)(Product);