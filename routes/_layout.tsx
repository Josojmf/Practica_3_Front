import { PageProps } from "$fresh/server.ts";

const layout =(props:PageProps) => {
    const Component = props.Component;
    return (
        <html>
            <body>
                <Component />
            </body>
        </html>
    )      
};

export default layout;
    