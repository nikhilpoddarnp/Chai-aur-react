import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './component/card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card username="Cows" btnText ="click me" 
    innerContent="A cow is a domestic animal that is very common, and can be seen often. It is found worldwide in various sizes, 
    shapes, and colours. The cow has two ears and eyes, one big nose, a long tail, four limbs, and two sharp horns. It can live in jungles, villages, pastures, and even cities."
     srcText="https://images.pexels.com/photos/14356738/pexels-photo-14356738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <Card username="Cats" btnText = "Visit "
    innerContent="Cats are beloved pets known for their cute, furry appearances, serious expressions, carefree attitudes, and silly antics that captivate people worldwide. 
    Their long history of coexistence with humans has led to an enduring fascination, with some even questioning whether we have domesticated them or they have domesticated us.   "
     srcText="https://images.pexels.com/photos/979503/pexels-photo-979503.jpeg?auto=compress&cs=tinysrgb&w=600"/>

  </StrictMode>,
)
