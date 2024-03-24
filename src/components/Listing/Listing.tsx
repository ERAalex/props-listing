import json from "../data/etsy.json";
import { ItemsSales } from "./ItemsSales";


type ListPr = {
    data: typeof json;
  };


export default function Listing({ data }: ListPr) {
    console.log('Listing')

    return (
        <div className="item-list">
            {data.map((items) => (
            <ItemsSales items={items} />
            ))}
      </div>
    )
}
