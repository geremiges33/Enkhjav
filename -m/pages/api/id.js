import { useRouter } from "next/router";
import React from "react";

export default function ID() {
    const router = useRouter();

    return <div>{router.query.id}</div>

}