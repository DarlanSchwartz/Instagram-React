export default function Story(storyObject) {
    return (

        <div class="story">
            <div class="imagem">
                <img src={storyObject.userImage} alt={storyObject.userImage} />
            </div>
            <div class="usuario">
                {storyObject.userName}
            </div>
        </div>

    );
}