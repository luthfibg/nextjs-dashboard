import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  // CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions';

export default async function CustomersTable({
  query,
  customers,
}: {
  query: string;
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-md bg-magnetic-100 p-2 md:pt-0">
          <div className="md:hidden">
            {customers?.map((customer) => (
              <div
                key={customer.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <div className="flex items-center gap-3">
                        <Image
                          src={customer.image_url}
                          className="rounded-full"
                          alt={`${customer.name}'s profile picture`}
                          width={28}
                          height={28}
                        />
                        <p>{customer.name}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      {customer.email}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between border-b py-5">
                  <div className="flex w-1/2 flex-col">
                    <p className="text-xs">Intitution</p>
                    <p className="font-medium">{customer.institution}</p>
                  </div>
                  <div className="flex w-1/2 flex-col">
                    <p className="text-xs">Email</p>
                    <p className="font-medium">{customer.email}</p>
                  </div>
                </div>
                <div className="pt-4 text-sm">
                  <p>{customer.phone} Phone</p>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full rounded-md text-gray-900 md:table">
            <thead className="rounded-md bg-magnetic-100 text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Institution
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-900">
              {customers.map((customer) => (
                <tr key={customer.id} className="group">
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={customer.image_url}
                        className="rounded-full"
                        alt={`${customer.name}'s profile picture`}
                        width={28}
                        height={28}
                      />
                      <p>{customer.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                    {customer.institution}
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                    {customer.email}
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                    {customer.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
}
