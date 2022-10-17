import React from 'react'
import  "./cloneLOL.css"  
function htmlcss() {
  return (
    <>  
        <div className='header-web'>
              <dir className="header-web-logo">
                <img src=" http://lienminh.garena.vn/templates/lmht_2013/images/logo_lmht.png" alt="" />
              </dir>
              <div className="header-web-menu">
                    <ul  className="header-web-menu-list">
                      <li className='list-hover'>tin tức 
                             <div className="header-web-down-firt">
                                <ul  className="header-web-down-firt-list">
                                  <li>tin tức </li>
                                  <li>sự kiện </li>
                                  <li>tin game</li>
                                  <li>esport</li>
                                  <li>cộng đồng</li>
                                  <li>cẩm nang</li>
                                  <li>vũ trụ</li>
                                </ul> 
                              
                          </div>
                      
                      </li>
                      <li className='list-hover'>giới thiệu
                            <div className="header-web-down-firt">
                              <ul className="header-web-down-firt-list sub">
                                              <li> giới thiệu</li>
                                                <li>tướng </li>
                                                <li>trang bị</li>
                                                
                                        </ul>   
                              </div>
                        </li>
                      <li>esport</li>
                      <li>hỗ trợ</li>
                      <li>tải game</li>
                      <li>nạp thẻ</li>
                    </ul> 
              </div>
        </div>
        <div className='header-web-down'>
        </div>
        <div className='carousel-logo'></div>
        <div className='body-web'></div>
        <div className='footer-web'></div>
    </>
  )
}

export default htmlcss