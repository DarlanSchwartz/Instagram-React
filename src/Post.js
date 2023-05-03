import React, { useState } from 'react';

export default function Post(postObject) {

    const [isLiked, setLiked] = useState(false);
    const [isSaved, setSaved] = useState(false);
    const [heartAnimation, setHeartAnimation] = useState(false);

    function like() {
        setLiked(!isLiked);
    }

    function doubleClickLike() {
        if(isLiked)
        {
            return;
        }

        setLiked(true);
        setHeartAnimation(true);
        setTimeout(() => setHeartAnimation(false), 500);
    }

    function save() {
        setSaved(!isSaved);
    }

    let heartName = isLiked ? 'heart' : 'heart-outline';
    let heartClass = isLiked ? "heart-red" : "heart-default";
    let sum = isLiked ? 1 : 0;
    let totalLikesAmount = Number(postObject.likesAmount.toString().replace('.', '')) + sum;
    totalLikesAmount = totalLikesAmount.toString();
    totalLikesAmount = `${totalLikesAmount.substring(0, 3)}.${totalLikesAmount.substring(3)}`;

    let saved = isSaved ? "bookmark" : "bookmark-outline";

    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={postObject.userImage} alt="" />
                    {postObject.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onDoubleClick={doubleClickLike} src={postObject.postImage} alt="" />
                {heartAnimation && <div className="heart"><img src="./assets/img/heart.png" /></div>}
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" class={heartClass} onClick={like} name={heartName}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={save} name={saved}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={postObject.firstLikeImage} alt="" />
                    <div data-test="likes-number" class="texto">
                        Curtido por <strong>{postObject.firstLikeName}</strong> e <strong>outras {totalLikesAmount}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}