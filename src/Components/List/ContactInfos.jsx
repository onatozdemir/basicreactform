import Accordeon from './Accordeon'
// import ListGroups from './ListGroups'

const ContactInfos = ({ contactInfos, onDelete, editForm }) => {

    
    return (
        <>
            {contactInfos.map((contactInfos) => (
                <Accordeon contactInfos={contactInfos} onDelete={onDelete} editForm={editForm} />
                
            ))}
            
        </>
    )

}

export default ContactInfos