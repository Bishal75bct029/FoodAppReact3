import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const NavContainer = styled.div`
    max-width: 1440px;
    max-height: 241px;
    /* display: flex; */
    justify-content: space-between;
    padding-left:120px;
    /* padding-top: 85px; */

    img{
        width: 185px;
        height: 39px;
    }

    .component{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        height: 161px;

    }
    @media (max-width: 768px) {
        .component{

            flex-direction: column;
            height: auto;
            padding: 20px;
        }
    }

    .search{
        width: 285px;
        height: 40px;
        border: 1px solid #FF0909;
        padding:6px;
        border-radius: 5px;
    }
    .buttons{
        display: flex;
        max-width: 326px;
        height: 31px;
        /* justify-content: center; */
        margin:0 auto;
        margin-bottom: 15px;
        align-items: center;
        gap: 14px;

        
    }
`

const Navbar = ({search,filterButtons}) => {
    const values = ['all','breakfast','lunch','dinner']
  return (
    <NavContainer>
        <div className='component'>

        <img src="./public/logo.svg" alt="" />
        <input type="text" placeholder='Search Food....' className='search' onChange={search}/>
        </div>

        <div className="buttons">
            {values.map((element,index)=>{
                return(<>

                <Button isType = {true} value ={`${element}`} key = {index}filterButtons ={filterButtons}/>
                
                </>)
            })
}
        </div>
    </NavContainer>
  )
}

export default Navbar