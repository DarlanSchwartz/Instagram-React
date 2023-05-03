import Suggestion from './Suggestion'


const AllSuggestions = [
    {
        userImage: "assets/img/bad.vibes.memes.svg",
        userName: "bad.vibes.memes",
        reason: "Segue você"
    },
    {
        userImage: "assets/img/chibirdart.svg",
        userName: "chibirdart",
        reason: "Segue você"
    },
    {
        userImage: "assets/img/razoesparaacreditar.svg",
        userName: "razoesparaacreditar",
        reason: "Novo no Instagram"
    },
    {
        userImage: "assets/img/adorable_animals.svg",
        userName: "adorable_animals",
        reason: "Segue você"
    },
    {
        userImage: "assets/img/smallcutecats.svg",
        userName: "smallcutecats",
        reason: "Segue você"
    }];

export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {AllSuggestions.map(Suggestion)}
        </div>
    );
}