import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../Contexts/ConversationsContext.js';

export default function Conversations() {

    const converstions = useConversations()
    console.log(converstions);

    return null
//     <ListGroup>
//         {converstions.map((conversation, idx) => (
//             <ListGroup.Item key={idx}>
//                 {/* {contact.name} */}
//             </ListGroup.Item>
//         ))}
//     </ListGroup>
}
