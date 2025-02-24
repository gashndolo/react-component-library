import { useState } from 'react'
import Toggle from './components/Toggle/Toggle'
import ToggleButton from './components/Toggle/ToggleButton'
import ToggleOff from './components/Toggle/ToggleOff'
import ToggleOn from './components/Toggle/ToggleOn'
import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'
import { BsStar, BsStarFill } from "react-icons/bs"
import Banner from './components/Banners/Banner'


function App() {

  return (
    <div class="container">
      <h1>React Component Library</h1>
      <div className='components'>
        <Button variant="warning" size="lg">Log In</Button>
        <Button variant="danger" size="lg">Log In</Button>
        <Button variant="success" size="lg">Log In</Button>
        <Button variant="warning" size="sm">Log In</Button>
        <Button variant="danger" size="sm">Log In</Button>
        <Button variant="success" size="sm">Log In</Button>
      </div>
      <div className='components'>
        <Badge>Badge</Badge>
        <Badge color="red">Badge</Badge>
        <Badge color="yellow">Badge</Badge>
        <Badge color="green">Badge</Badge>
        <Badge color="blue">Badge</Badge>
        <Badge color="indigo">Badge</Badge>
        <Badge color="purple">Badge</Badge>
        <Badge color="pink">Badge</Badge>
      </div>
      <div className="components">
        <Badge shape="pill">Badge</Badge>
        <Badge shape="pill" color="red">Badge</Badge>
        <Badge shape="pill" color="yellow">Badge</Badge>
        <Badge shape="pill" color="green">Badge</Badge>
        <Badge shape="pill" color="blue">Badge</Badge>
        <Badge shape="pill" color="indigo">Badge</Badge>
        <Badge shape="pill" color="purple">Badge</Badge>
        <Badge shape="pill" color="pink">Badge</Badge>
      </div>
      <div className="components">
        <Toggle>
          <ToggleButton>
            <ToggleOn>
              <BsStarFill className="star filled" /> 
            </ToggleOn>
            <ToggleOff>
              <BsStar className="star" />
            </ToggleOff>
          </ToggleButton>
        </Toggle>
        <Toggle>
          <ToggleButton>
            <ToggleOn>
              <BsStarFill className="star filled" /> 
            </ToggleOn>
            <ToggleOff>
              <BsStar className="star" />
            </ToggleOff>
          </ToggleButton>
        </Toggle>
      </div>
      <Banner variant="success" 
          topic="Congratulations"
      />
      <Banner variant="success" 
        topic="Congratulations"
        subtopic="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      />
      <Banner variant="warning" 
          topic="Attention"
      />
      <Banner variant="warning" 
        topic="Congratulations"
        subtopic="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      />

      <Banner variant="danger" 
          topic="There is a problem with your application"
      />
      <Banner variant="danger" 
        topic="There is a problem with your application"
        subtopic="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      />

      <Banner variant="neutral" 
          topic="Update available"
      />
      <Banner variant="neutral" 
        topic="Update available"
        subtopic="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      />
            
     
    </div>
  )
}

export default App
