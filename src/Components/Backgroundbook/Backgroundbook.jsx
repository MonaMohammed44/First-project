import React from 'react';
import './Backgroundbook.css';
function Backgroundbook() {
  return (
      <div className='Backgroundbook'>
      <form className='form'>
      <select className='from'>
        <option hidden>from</option>
        <option>Egypt</option>
        <option>Turkiye</option>
        <option>Saudi Arabia</option>
        <option>Phalestine</option>
        <option>Germany</option>
        <option>Japan</option>
        <option>Russia</option>
        <option>Italy</option>
        <option>France</option>
        <option>China</option>
        <option>Canada</option>
        <option>Thailand</option>
      </select>

      <select className='to'>
        <option hidden>to</option>
        <option>Egypt</option>
        <option>Turkiye</option>
        <option>Saudi Arabia</option>
        <option>Phalestine</option>
        <option>Germany</option>
        <option>Japan</option>
        <option>Russia</option>
        <option>Italy</option>
        <option>France</option>
        <option>China</option>
        <option>Canada</option>
        <option>Thailand</option>
      </select>
      <input className='date' type='datetime-local'/>
      <input className='submit' type='submit'/>
      <input className='delet' type="reset" value="delet"/>
      </form>
     </div>
  )
}

export default Backgroundbook
