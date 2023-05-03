import Post from "./Post";

const AllPosts = [
    {
        userImage: "assets/img/meowed.svg",
        userName: "meowed",
        postImage: "assets/img/gato-telefone.svg",
        firstLikeImage: "assets/img/respondeai.svg",
        firstLikeName: "respondeai",
        likesAmount: 101.523
    },
    {
        userImage: "assets/img/barked.svg",
        userName: "barked",
        postImage: "assets/img/dog.svg",
        firstLikeImage: "assets/img/adorable_animals.svg",
        firstLikeName: "adorable_animals",
        likesAmount: 124.159
    },
    {
        userImage: "assets/img/meowed.svg",
        userName: "meowed",
        postImage: "assets/img/gato-telefone.svg",
        firstLikeImage: "assets/img/respondeai.svg",
        firstLikeName: "respondeai",
        likesAmount: 101.523
    }];


export default function Posts() {
    return (
        <div class="posts">
            {AllPosts.map(Post)}
        </div>
    );
}