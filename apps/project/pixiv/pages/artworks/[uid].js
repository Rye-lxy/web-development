import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Artwork from "../../components/artwork"
import { sqlQuery } from "../../lib/db"
import Link from "next/link"
import Image from "next/image"

function ArtworkPage({ artwork }) {
    const router = useRouter();
    const { uid, width, height } = router.query

    if (!width || !height) {
        return (
            <div>
                <Artwork artwork={artwork} />
            </div>
        )
    } else {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            window.addEventListener("resize", () => {
                setWindowWidth(window.innerWidth);
            });
            return () => window.removeEventListener("resize", () => {setWindowWidth(window.innerWidth)});
        }, [])

        let fitStyle = {};
        if (width > 1160 && width > windowWidth) {
            fitStyle = {marginTop: "-64px"};
        }

        return (
            <div style={fitStyle}>
                <Link href={`/artworks/${uid}`}>
                    <a rel="noopener" style={{cursor: "zoom-out"}}>
                        <Image src={"/artworks/"+uid+"_p0.jpg"} alt={artwork.name} width={width} height={height} layout="fixed" quality="100" />
                    </a>
                </Link>
            </div>
        );
    }
}

export async function getStaticPaths() {
    try {
        const results = await sqlQuery({
            query: `SELECT uid FROM Artwork;`
        });

        const paths = results.map((arts) => ({
            params: { uid: arts.uid },
        }));
        return {paths, fallback: false};
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({ params }) {
    try {
        const artwork_result = await sqlQuery({
            query: `SELECT Artwork.*, User.name AS author_name FROM Artwork INNER JOIN User ON Artwork.creator = User.uid WHERE Artwork.uid = ?;`,
            values: [params.uid]
        });
        let artwork = JSON.parse(JSON.stringify(artwork_result))[0];

        const tag_result = await sqlQuery({
            query: `SELECT tag FROM Label WHERE artwork = ?;`,
            values: [params.uid]
        });
        let tag = JSON.parse(JSON.stringify(tag_result));

        artwork["tags"] = tag

        return {
            props: { artwork }
        };
    } catch (error) {
        return { props: { artwork: false }}
    }
}

export default ArtworkPage