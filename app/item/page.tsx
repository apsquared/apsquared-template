import Breadcrumb from "@/components/Common/Breadcrumb";
import AddItemBtn from "@/components/Item/AddItemBtn";


async function getCount() {
  const res = await fetch('http://localhost:3000/api/getcount?type=item')  
  //this is cached add { cache: 'no-store' } for no cache or { next: { revalidate: 10 } } for timed cache

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function ItemPage() {

   const cnt = await getCount();

    return (
      <>
        <Breadcrumb
          pageName="Item Page"
          description="Generic Item Page"
        />
        <section className="pt-8 pb-8">
        <div className="container">
          <div>{cnt.count}</div>
          <AddItemBtn/>
        </div>
        </section>
      </>
    );
}


