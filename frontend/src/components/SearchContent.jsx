import React from 'react'
import { styled } from 'styled-components'
import Button from './Button'

const SearchContainer = styled.div`
    max-width: 100%;
    /* position: relative; */
    min-height: calc(100vh );
    display: flex;
    background-image: url('./bg.png');
    background-size: 100% auto;
    overflow-y: auto;

    

.card{

}
.wrap{
    display: flex;
    width: 1380px;
    height: 366px;
    flex-wrap: wrap;
    background-color: transparent;
    justify-content: center;
    padding-top: 80px;
    row-gap: 20px;
    /* overflow: hidden; */
    column-gap: 20px;
}
`
const Card = styled.div`
    border-radius: 19px;
    flex-direction: column;
    background: radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    ),
    radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    );

  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    /* border:2px solid black; */
    
    /* background-blend-mode: overlay, normal; */
    display: flex;
    /* gap: 10px; */
    width: 340px;
    height: 167px;
    background-color: transparent;
    /* position: absolute; */
    /* margin: 0 auto; */
    /* top: 180px; */
    /* left: 190px; */
    /* top: ; */

    .detail{
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        /* align-items: flex-end; */
        /* font-family: Inter; */
        font-size: 12px;
        font-weight: 400;
        padding-top: 12px;
        p{
            margin-top: 8px;
        }
        h1{
            white-space: nowrap;
        }
        
    }

    .insideCard{
        height: 130px;
        width: 300px;
        display: flex;
        /* align-items: center; */
        /* justify-content: center; */
        /* flex-direction: column; */

    }
    img{
        padding-top: 14px ;
    }
    .button{
        /* margin-top: 8px; */
        margin-right: 8px;
        display: flex;
        align-self: flex-end;
    }

`

const SearchContent = ({data}) => {
  return (
    // <div>

    <SearchContainer>
        {/* <img src="./public/bg.png" alt="" className='bg' /> */}

        <div className='wrap'>

            {console.log(data, ' ma data ho')}
            { data?.map((objects, index)=>{
                console.log(objects,'ma objects ho')
                
                
                return (
                    <Card>
                        <div className='insideCard'>

                
                    <img src={`http://localhost:9000${objects.image}  `} alt="" />
                    <div className='detail'>
                        <h2>{objects.name}</h2>
                        
                        <p>
                            {objects.text}
                        </p>

                        
                    </div>
                    </div>
                    <div className='button'>

                        <Button value =  {`$${objects.price.toFixed(2)}`} isType ={false}/>
                    </div>
                        {/* </div> */}
        </Card>
                )
                
                
                
            })
}
            </div>
    </SearchContainer>
    // </div>

  )
}

export default SearchContent