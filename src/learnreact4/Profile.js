import { getImageUrl1 } from "./utils";

export default function Profile2({ name, imgSrc, size, profession, award, awards, discovered }) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl1(imgSrc)}
                alt={name}
                width={size}
                height={size}
            />
            <ul>
                <li>
                    <b>Profession : </b>
                    {profession}
                </li>
                <li>
                    <b>Awards : {award}</b>
                    {awards}
                </li>
                <li>
                    <b>Discovered : </b>
                    {discovered}
                </li>
            </ul>
        </section>
    );
}