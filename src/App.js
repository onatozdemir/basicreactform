import React from 'react'
import FormBorder from './Components/FormBorder'
import { useState } from 'react'
import ContactInfos from './Components/List/ContactInfos'
// import Accordeon from './Components/List/Accordeon'
import {nanoid} from "nanoid"


function App() {

  const [contactInfos, setContactInfos] = useState([
        
    {
        formName: 'Onat',
        formLastName: 'Ozdemir',
        formEmail: 'onatozdemir@gmail.com',
        formNumber: '5556667788',
        formAge: '15',
        id: 1,
      },

    {
      formName: 'Elif',
      formLastName: 'Ozdemir',
      formEmail: 'onatozdemir@gmail.com',
      formNumber: '5556667788',
      formAge: '15',
      id: 2,
  },

  {
    formName: 'Idil',
    formLastName: 'Ozdemir',
    formEmail: 'onatozdemir@gmail.com',
    formNumber: '5556667788',
    formAge: '15',
    id: 3,
},
])

  // add form
  function addForm() {

    if(editContactId){

      let newContacts = contactInfos.map(el => {
        if(el.id === editContactId){
          el.formName = formName
          el.formAge = formAge
          el.formEmail = formEmail
          el.formNumber = formNumber
          el.formLastName = formLastName
        }
        return el
      })

      setContactInfos(newContacts)
      setEditContactId(0)

    } else{
      const id = nanoid()
      const newForm = { 
        id, 
        formName,
        formLastName,
        formEmail,
        formNumber,
        formAge,
      }
      setContactInfos([...contactInfos, newForm])
    }
    
    setFormName("")
    setFormNumber("")
    setFormLastName("")
    setFormMessage("")
    setFormEmail("")
    setFormAge("")

      
  }

  function deleteForm(id) {  // delete id and filter only id

    setContactInfos(
      contactInfos.filter((info) => info.id !== id))

  }
  
  const [editContactId, setEditContactId] = useState(0) 

  const editForm = (id) => {

    setEditContactId(id)

    let contact = contactInfos.find(contact => contact.id==id )

    setFormName(contact.formName)
    setFormNumber(contact.formNumber)
    setFormLastName(contact.formLastName)
    setFormMessage(contact.formMessage)
    setFormEmail(contact.formEmail)
    setFormAge(contact.formAge)
  }


  const [formName, setFormName] = useState('')
  const [formLastName, setFormLastName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formNumber, setFormNumber] = useState('')
  const [formAge, setFormAge] = useState('')
  const [formMessage, setFormMessage] = useState('')



 
  return (
    <div className="App">
      <FormBorder addForm={addForm}
        formAge={formAge} formName={formName} formLastName={formLastName} formEmail={formEmail} formNumber={formNumber} formMessage={formMessage}
        setFormAge={setFormAge} setFormName={setFormName} setFormLastName={setFormLastName} setFormEmail={setFormEmail} setFormNumber={setFormNumber} setFormMessage={setFormMessage}
      />
      <hr />
      <ContactInfos contactInfos={contactInfos} onDelete={deleteForm} editForm={editForm} />
    </div>
  );
}

export default App;
