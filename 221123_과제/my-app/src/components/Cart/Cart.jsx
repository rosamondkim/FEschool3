import React from 'react'
import './cart.css'

export default function Cart() {
  // 같은 페이지 내 이동은 a를 사용하지 않습니다. react-router를 사용하셔서 link로 이동하게 해주셔야 합니다.
  return (
    <a href='#' className='link-btn cart-link'></a>
  )
}
