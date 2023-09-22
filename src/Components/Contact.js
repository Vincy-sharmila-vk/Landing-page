import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contact'>
      <h2>Contact</h2>
      <div className='form'>
       <label>Name</label>
       <input type='text' name='name' placeholder='enter your name' />
       <label>Email Id</label>
       <input type='text' name='mail' placeholder='enter your mail Id' />
       <label>Phone number</label>
       <input type='text' name='name' placeholder='enter your number' />
       <label>Message</label>
       <textarea></textarea>
       <button>Submit</button>
       </div>
        </div>
      </div>
  )
}

export default Contact