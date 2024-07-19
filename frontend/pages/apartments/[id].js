import { find } from "../../utils/apiClient";

export default function ApartmentDetails({ apartment }) {
  return (
    <div>
      <h1>Name: {apartment.name}</h1>
      <h1>Location: {apartment.location}</h1>
      <h1>Price: {apartment.price}</h1>
      <h1>Description: {apartment.description}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const apartment = await find('apartments',id);

  return {
    props: {
      apartment,
    },
  };
}
