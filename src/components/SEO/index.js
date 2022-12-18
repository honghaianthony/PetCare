import React from "react";
import { Helmet } from "react-helmet-async";
export default function SEO({ title, description, name, type }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
