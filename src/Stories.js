import Story from "./Story";

const AllStories = [
    {
        userImage: "assets/img/9gag.svg",
        userName: "9gag"
    },
    {
        userImage: "assets/img/meowed.svg",
        userName: "meowed"
    },
    {
        userImage: "assets/img/barked.svg",
        userName: "barked"
    },
    {
        userImage: "assets/img/nathanwpylestrangeplanet.svg",
        userName: "nathanwpylestrangeplanet"
    },
    {
        userImage: "assets/img/wawawicomics.svg",
        userName: "wawawicomics"
    },
    {
        userImage: "assets/img/filomoderna.svg",
        userName: "filomoderna"
    },
    {
        userImage: "assets/img/respondeai.svg",
        userName: "respondeai"
    },
    {
        userImage: "assets/img/memeriagourmet.svg",
        userName: "memeriagourmet"
    }
];


export default function Stories() {
    return (
        <div class="stories">
            {AllStories.map(Story)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}