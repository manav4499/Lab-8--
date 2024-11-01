import "./memberComponent.css" ;

export default function MemberComponent({name, dob, favFood, favEmoji, birthPlace}){
    return(<>
        <div class="memberContainer">
            <h2>{name}</h2>
            <ul>
                <li><strong>Date of Birth : </strong>{dob}</li>
                <li><strong>Favorite Food : </strong>{favFood}</li>
                <li><strong>Favourite Emoji : </strong>{favEmoji}</li>
                <li><strong>Birthplace : </strong>{birthPlace}</li>
            </ul>
        </div>
    </>)
}