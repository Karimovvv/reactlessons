import React from "react";
import Card from "./card.jsx";
import './Styled.css'

class Fruits extends React.Component{
    render(){
        return(
        <div>
             <h1> Fruit Table </h1>
            <div className="wrapper">

                <Card title='Orange'
                scr='https://th.bing.com/th/id/R.75811871b4c10fc2eeec44ec7b672d7c?rik=qRF9tVRCCM1BPQ&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fOrange-Transparent.png&ehk=i0POa4dCQVAAo8GXBt9TkFnWTP8I7iZU5oJOEKfMzu0%3d&risl=&pid=ImgRaw&r=0'/>
                <Card
                title='Melon'
                scr='https://th.bing.com/th/id/R.b212beb8401f223a039b2f9c18a73db0?rik=a%2b69GkRnzw%2fQvA&riu=http%3a%2f%2fwww.bestherbalhealth.com%2fwp-content%2fuploads%2f2014%2f07%2fMelon.jpg&ehk=mAcDEid5d0WXGkBZMcfI3NDBBUL2yX%2brHJvf94C6KaE%3d&risl=&pid=ImgRaw&r=0'/>
                <Card
                title='Dragon Fruit'
                scr='https://th.bing.com/th/id/R.2d8ef0bff04fedcf73edbcbff8575769?rik=whPGEVmQWcuDvg&riu=http%3a%2f%2fwww.specialtyproduce.com%2fsppics%2f9461.png&ehk=tcNPkNh3p%2fmHJWFjKKx26pDxHCMkMMvH%2bKe27c3cOtE%3d&risl=&pid=ImgRaw&r=0'/>
                <Card
                title='Cherry'
                scr='https://spicyip.com/wp-content/uploads/2015/06/cherry.png'/>
                <Card
                title='Banana'
                scr='https://th.bing.com/th/id/OIP.kuVKgNkBaPuVHUDlcLtpMQHaFj?pid=ImgDet&rs=1'/>   
                <Card
                title='Strawberry'
                scr='https://th.bing.com/th/id/OIP.vNPkLpIfOmJEMEWUYg2f_wHaF1?pid=ImgDet&rs=1'/> 
                <Card
                title='Mango'
                scr='https://th.bing.com/th/id/OIP.bG-LqFM4EXUzToJ2JxPXkAAAAA?pid=ImgDet&w=375&h=375&rs=1'/> 

            </div>

        </div>
        )
    }
}
export default Fruits