import React, { useState } from 'react';

export default function User() {
    const [myUserName, setName] = useState('catanacomics');
    const [myUserImage, setImage] = useState('assets/img/catanacomics.svg');

    function changeUserName() {
        const newUserName = prompt('Qual será o nome novo?');
        if (newUserName != null && newUserName != undefined && newUserName != "" && newUserName != " ") {
            setName(newUserName);
        }
    }

    function changeUserImage() {
        const newUserImage = prompt('URL de nova imagem');
        if (newUserImage != null && newUserImage != undefined && newUserImage != "" && newUserImage != " ") {
            setImage(newUserImage);
        }
    }

    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={changeUserImage} src={myUserImage} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{myUserName}</strong>
                    <ion-icon data-test="edit-name" onClick={changeUserName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}