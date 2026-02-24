import { Head, Link } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';




const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a new product',
        href: '/products/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a new product" />
            <div className="p-4 m-4" >
                <form action="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
                            <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                </form>
      
          {/* <Button>Add Product</Button> */}
        

            </div>
        </AppLayout>
    );
}

