import { useState } from 'react';
import { useRouter } from 'next/router';
import { create } from "../../utils/apiClient";

export default function AddApartment() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                name,
                location,
                price: parseFloat(price),
            };
            console.log('Data to create:', data);
            const response = await create('apartments', data);
            
            if (response.status === 201) {
                alert(`Apartment added successfully`);
                router.push('/');
            } else {
                alert(`Unexpected response status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error adding apartment:', error);
            alert('Failed to add apartment');
        }
    };

    return (
        <div>
            <h1>Add a New Apartment</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Apartment</button>
            </form>
        </div>
    );
}
