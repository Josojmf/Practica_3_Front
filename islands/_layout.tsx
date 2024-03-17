import { PageProps } from "$fresh/server.ts";

const layout =(props:PageProps) => {
    const Component = props.Component;
    return (
        <html>
            <body>
                <div>Header</div>
                <Component />
            </body>
        </html>
    )      
};

export default layout;
    