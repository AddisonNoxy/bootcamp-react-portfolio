import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Sorry! There was an error!</h1>
            <p>Sorry! There was an unexpected error!</p>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    );
}