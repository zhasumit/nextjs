import { Metadata } from "next";

export default function lay({ children }) {
    return (
        <>
            <h1>
                TEAM layout section
            </h1>
            {children}
        </>
    )

}

export const metadata: Metadata = {
    title: "Hi from TEAM layout",
};