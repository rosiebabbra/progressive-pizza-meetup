import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const orderId = url.searchParams.get("orderId");

    if (!orderId) {
        throw new Response("Missing order ID", { status: 400 });
    }

    return { orderId };
}

export default function Confirmation() {
    const { orderId } = useLoaderData<typeof loader>();
    return (
        <main>
            <h2>Merci pour votre commande</h2>
            <p>Commande number {orderId}</p>
            <p>Votre pizza sera prete dans quelques...</p>
        </main>)
}