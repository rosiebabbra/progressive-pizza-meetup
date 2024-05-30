import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

let nextOrderId = 1;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const size = formData.get('size');
  const toppings = formData.get('topping');

  const orderId = nextOrderId++;

  return new Response(null, { status: 302, headers: { Location: `/confirmation?orderId=${orderId}` } });
}

export default function Index() {
  return (
    <main>
      <h2>Remixez votre pizza</h2>
      <form method="POST" action="?index">
        <fieldset>
          <legend>Selectionnez la taille</legend>
          <label><input type="radio" />Small</label>
          <label><input type="radio" />Medium</label>
          <label><input type="radio" />Large</label>
        </fieldset>
        <fieldset>
          <legend>
            Choisissez votre garniture
          </legend>
          <label><input type="checkbox" />Pepperoni</label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
