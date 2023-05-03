export default function Suggestion(suggestionObject) {
    return (

        <div class="sugestao">
            <div class="usuario">
                <img src={suggestionObject.userImage} alt={suggestionObject.userImage} />
                <div class="texto">
                    <div class="nome">{suggestionObject.userName}</div>
                    <div class="razao">{suggestionObject.reason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>

    );
}