'use client';
import Image from "next/image";
import { useState } from "react";
const properties = [
    {
      id: 1,
      image: '/house1.jpeg',
      price: 2095,
      name: 'Palm Harbor',
      address: '2699 Green Valley, Highland Lake, FL',
      beds: 3,
      baths: 2,
      size: '5x7 m²',
      isPopular: true
    },
    {
      id: 2,
      image: '/house2.jpeg',
      price: 2700,
      name: 'Beverly Springfield',
      address: '2821 Lake Sevilla, Palm Harbor, TX',
      beds: 4,
      baths: 2,
      size: '6x7.5 m²',
      isPopular: true
    },
    {
      id: 3,
      image: '/house3.jpeg',
      price: 4550,
      name: 'Faulkner Ave',
      address: '909 Woodland St, Michigan, IN',
      beds: 4,
      baths: 3,
      size: '8x10 m²',
      isPopular: true
    },
    {
      id: 4,
      image: '/house4.jpeg',
      price: 2400,
      name: 'St. Crystal',
      address: '210 US Highway, Highland Lake, FL',
      beds: 4,
      baths: 2,
      size: '6x8 m²'
    },
    {
      id: 5,
      image: '/house5.jpeg',
      price: 1500,
      name: 'Cove Red',
      address: '243 Curlew Road, Palm Harbor, TX',
      beds: 2,
      baths: 1,
      size: '5x7.5 m²'
    },
    {
      id: 6,
      image: '/house6.jpeg',
      price: 1600,
      name: 'Tarpon Bay',
      address: '103 Lake Shores, Michigan, IN',
      beds: 3,
      baths: 1,
      size: '5x7 m²'
    }
  ];

export default function BuyPage(){
    const [people, setPeople] = useState(0)
    const [budget, setBudget] = useState(0)
    const [size, setSize] = useState(0)
    return(
      <main className="pt-24 pb-16">
        <div>
            <p>Fill out the below form and we will try to find you the perfect to fit your needs</p>
            <form action="" method="POST">
                <label>Enter the amount of people that you would be living with</label>
                <br/>
                <input type="number" id="people" name="people" placeholder="0"></input>
                <br/>
                <label>Enter the amount that you are willing to spend</label>
                <br/>
                <input type="number" id="budget" name="budget" placeholder="0"></input>
                <br/>
                <label>Enter the size of the home you wish to buy</label>
                <br/>
                <input type="number" id="size" name="size" placeholder="0"></input>
                <br/>
                <button type="submit">Find</button>
            </form>
        </div>
      </main>
    )
}