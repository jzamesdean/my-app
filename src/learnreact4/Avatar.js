import { getImageUrl } from "./utils";

export default function Avatar1( {person,size} ) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}