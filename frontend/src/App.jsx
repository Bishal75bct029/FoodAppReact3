import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SearchContent from './components/SearchContent'
// import Body from './components/Body'

function App() {
const [data, setData]  = useState([])
const [searchData,setSearch] = useState()
const [isClicked, setClick] =useState(false)
// const [data, setData]  = useState([])


const fetctData = async () =>{
  
    try{

      const fetchedData = await fetch("http://localhost:9000")
      if (!fetchedData.ok)
      {
        throw new Error("Error in Fetching Data")
      }
      return fetchedData.json()
      
    }
    catch (e){
      console.log(e.message)
      throw e
    }
  }
  useEffect(

    ()=>{

    fetctData().then(datas=> {
      console.log(datas,"received")
      setData(datas )
      setSearch(datas)
      
    }).catch(e=>{
      console.log("error bishal babu",e.message)
    })},[]
    )
    console.log(searchData,'gandu')
    const search = (e)=>{
      e.preventDefault()
      if (e.target.value ==''){
        setSearch(data);
      }else{
        let filteredData = data.filter((element,index)=>{
          return element.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearch(filteredData)
      }
    } 
    
    const filterButtons =(value) =>{
      if (value == 'all'){
        setSearch(data);
        console.log(searchData)
        return
      }
      let newData = data.filter((element,index)=>{
        console.log("Element",element)
        console.log(element.type,"ani ma value",value ,"type ho ma")
        return value === element.type

      })
      setSearch(newData)
      // console.log(newData,'ma new data ho')
    }
  return (
    <>
      <Navbar search = {search} filterButtons ={filterButtons}/>
      <SearchContent data = {searchData}/>
    </>
  )
}

export default App
