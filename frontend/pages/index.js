import { find } from '../utils/apiClient';
import Link from 'next/link';

export default function Home({ apartments }) {
  return (
    <div>
      <Link href="/apartments/add">
        Add New Apartment
      </Link>
      <h1>Apartment Listings</h1>
      <ul>
        {apartments.map(apartment => (
          <li key={apartment.id}>
            <Link href={`/apartments/${apartment.id}`}>
              {apartment.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await find('apartments');
  const apartments = response.data;
  return {
    props: {
      apartments,
    },
  };
}
