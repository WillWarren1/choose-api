import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Dog() {
  const [dog, setDog] = useState('')
  const [classHidden, setClassHidden] = useState('hide')

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(resp => {
      console.log(resp.data.message)
      setDog(resp.data.message)
    })
  }, [])

  const revealImage = () => {
    setClassHidden('unhide')
  }

  return (
    <>
      <main>
        <h1>Click a button to see a dog!</h1>
        <h2>You can only click once,</h2>
        <h3>but there are no wrong answers :)</h3>
        <section>
          <figure
            className={classHidden}
            style={{
              width: '100%',
              height: '30rem',
              backgroundImage: `url('${dog}')`,
              backgroundImageSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </section>
        <nav>
          <button onClick={revealImage}>Option 1</button>
          <button onClick={revealImage}>Option 2</button>
          <button onClick={revealImage}>Option 3</button>
        </nav>
      </main>
    </>
  )
}
