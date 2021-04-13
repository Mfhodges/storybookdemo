import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const colorsList = ['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5','#2196f3','#03a9f4','#00bcd4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722'];

 const ConfettiBG = ({recycle=false,numberOfPieces=1200,tweenDuration=50000 }) => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
      recycle={recycle}
      tweenDuration={tweenDuration}
      initialVelocityX={2}
      colors={colorsList}
      numberOfPieces={numberOfPieces}
    />
  )
}

export default ConfettiBG;

