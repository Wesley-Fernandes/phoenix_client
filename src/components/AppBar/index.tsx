import React from 'react';

//components
import {Menubar} from "primereact/menubar";

//json
import { useNavigate } from 'react-router-dom';

function AppBar() {
    const navigate = useNavigate();
    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-file',
            command: ()=> {navigate("/auth/dashboard")},
        },{
            label: 'Salas',
            icon: 'pi pi-fw pi-file',
            command: ()=> {navigate("/auth/chats")},
        },{
            label: 'Perfil',
            icon: 'pi pi-fw pi-file',
            command: ()=> {navigate("/auth/profile")},
        }
    ]
  return (
    <Menubar model={items} />
  )
}

export default AppBar
