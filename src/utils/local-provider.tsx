import React from 'react';
import { IntlProvider } from "react-intl";

const locale = window.location.search.replace("?locale=","") || "en";

function LocalProvider (props: { children: any; }) {
    return (
        <IntlProvider locale={locale}>
            {props.children}
        </IntlProvider>
    );
}

export default LocalProvider;
