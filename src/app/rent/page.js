'use client';
import Image from "next/image";
import { useState } from "react";
export default function RentPage(){
    return(
      <main className="pt-24 pb-16">
          <div>
            <p>Fill out the below form and we will try to find you the perfect to fit your needs</p>
            <form action="" method="POST">
                <label>Enter the amount of people that you would be living with</label>
                <br/>
                <input type="number" id="people" name="people" placeholder="0"></input>
                <br/>
                <label>Enter the amount that you are willing to spend monthly</label>
                <br/>
                <input type="number" id="budget" name="budget" placeholder="0"></input>
                <br/>
                <label>Enter the size of the home you wish to rent</label>
                <br/>
                <input type="number" id="size" name="size" placeholder="0"></input>
                <br/>
                <button type="submit">Find</button>
            </form>
        </div>
      </main>
    )
}